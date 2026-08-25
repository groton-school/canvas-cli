import path from 'node:path';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import * as Plugin from '@qui-cli/plugin';
import ora from 'ora';
import puppeteer from 'puppeteer';

export type Configuration = Plugin.Configuration & {
  account_id?: number;
  grade_sync_tool_id?: number;
  term_ids?: number[];
  enable?: boolean;
};

const config: Configuration = {
  account_id: 1,
  enable: true
};

export function configure(proposal: Configuration = {}) {
  for (const key in proposal) {
    if (proposal[key] !== undefined) {
      config[key] = proposal[key];
    }
  }
}

export function options() {
  return {
    man: [{ level: 1, text: 'Grade Sync Options' }],
    num: {
      account: {
        description: 'Canvas Account ID',
        default: config.account_id
      },
      gradeSync: {
        description: 'Canvas Grade Sync externall tool ID',
        env: 'CANVAS_GRADE_SYNC',
        default: config.grade_sync_tool_id
      }
    },
    numList: {
      term: {
        description: 'Canvas Term ID',
        default: config.term_ids
      }
    },
    flag: {
      enable: {
        description: 'Enable grade sync',
        default: config.enable
      }
    }
  };
}

export function init({
  values: {
    account: account_id,
    gradeSync: grade_sync_tool_id,
    term: term_ids,
    ...rest
  }
}: Plugin.ExpectedArguments<typeof options>) {
  Canvas.plugin.configure({
    reason: path.basename(import.meta.filename, '.js')
  });

  configure({ account_id, grade_sync_tool_id, term_ids, ...rest });
}

export async function run() {
  const { account_id, grade_sync_tool_id, term_ids, enable } = config;
  if (!account_id) {
    throw new Error('account_id must be defined');
  }
  if (!grade_sync_tool_id) {
    throw new Error('grade_sync_tool_id must be defined');
  }
  if (!term_ids || !term_ids.length) {
    throw new Error('term_ids must be defined');
  }

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1000, height: 800 }
  });
  const [tab] = await browser.pages();

  const spinner = ora('Authenticating').start();
  await tab.goto(Canvas.client().instance_url);
  await tab.locator('#dashboard').wait();
  spinner.succeed('Authenticated');

  for (const enrollment_term_id of term_ids) {
    for (const course of await Canvas.v1.Accounts.Courses.list({
      path: { account_id },
      query: { enrollment_term_id }
    })) {
      spinner.start(
        `${enable ? 'Enabling' : 'Disabling'} nightly grade sync for ${Colors.value(course.name)}`
      );
      await tab.goto(
        `${Canvas.client().instance_url}/courses/${course.id}/external_tools/${grade_sync_tool_id}`
      );
      const grade_sync = await tab.waitForFrame(async (frame) => {
        const frameElement = await frame.frameElement();
        if (!frameElement) {
          return false;
        }
        const title = await frameElement.evaluate((el) =>
          el.getAttribute('title')
        );
        return title === 'Grade Sync';
      });
      await grade_sync.locator('#tab-utilities').click();
      await grade_sync
        .locator('[data-cid="Checkbox"]:has(input[type="checkbox"])')
        .wait();
      if (
        !!(await grade_sync.$(
          'input[data-toggle="turn-off-course-nightly-sync"]'
        )) === !!enable
      ) {
        spinner.info(
          `${Colors.value(course.name)} nightly grade sync already ${enable ? 'enabled' : 'disabled'}`
        );
      } else {
        if (enable) {
          await grade_sync
            .locator('input[data-toggle="turn-on-course-nightly-sync"]')
            .click();
          await grade_sync
            .locator('input[data-toggle="turn-off-course-nightly-sync"]')
            .wait();
          spinner.succeed(
            `${Colors.value(course.name)} nightly grade sync enabled`
          );
        } else {
          await grade_sync
            .locator('input[data-toggle="turn-off-course-nightly-sync"]')
            .click();
          await grade_sync
            .locator('input[data-toggle="turn-on-course-nightly-sync"]')
            .wait();
          spinner.succeed(
            `${Colors.value(course.name)} nightly grade sync disabled`
          );
        }
      }
    }
  }
  await browser.close();
}
