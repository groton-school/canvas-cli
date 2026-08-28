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
  assignment_group?: string;
  category?: string;
  username?: string;
  password?: string;
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
    },
    opt: {
      assignmentGroup: {
        description: 'Canvas Assignment Group name',
        default: config.assignment_group
      },
      category: {
        description: 'SIS assignment category name',
        default: config.category
      },
      username: {
        description: 'Entra ID username',
        env: 'ENTRA_USERNAME',
        secret: true,
        default: config.username
      },
      password: {
        description: 'Entra ID password',
        env: 'ENTRA_PASSWORD',
        secret: true,
        default: config.password
      }
    }
  };
}

export function init({
  values: {
    account: account_id,
    gradeSync: grade_sync_tool_id,
    term: term_ids,
    assignmentGroup: assignment_group,
    ...rest
  }
}: Plugin.ExpectedArguments<typeof options>) {
  Canvas.plugin.configure({
    reason: path.basename(import.meta.filename, '.js')
  });

  configure({
    account_id,
    grade_sync_tool_id,
    term_ids,
    assignment_group,
    ...rest
  });
}

export async function run() {
  const {
    username,
    password,
    account_id,
    grade_sync_tool_id,
    term_ids,
    enable,
    assignment_group,
    category
  } = config;
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

  const spinner = ora('Awaiting interactive authentication').start();
  await tab.goto(Canvas.client().instance_url);
  if (username) {
    spinner.text = 'Entering username';
    await tab.locator('input[name="loginfmt"]').fill(username);
    await tab.locator('input[type="submit"]').click();
  }
  if (password) {
    spinner.text = 'Entering password';
    await tab.locator('input[name="passwd"]').fill(password);
    await tab.locator('input[type="submit"]').click();
    const instructions = await (
      await tab.waitForSelector('#idDiv_SAOTCAS_Description')
    )?.evaluate((el) => el.textContent);
    const code = await (
      await tab.waitForSelector('#idRichContext_DisplaySign')
    )?.evaluate((el) => el.textContent);

    spinner.text =
      instructions && code
        ? instructions.replace('the number', Colors.value(code))
        : 'Waiting for MFA';
  }
  spinner.text = 'Waiting for authentication';
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
      const enableSelector = 'input[data-toggle="turn-on-course-nightly-sync"]';
      const disableSelector =
        'input[data-toggle="turn-off-course-nightly-sync"]';
      await grade_sync
        .locator('[data-cid="Checkbox"]:has(input[type="checkbox"])')
        .wait();
      if (!!(await grade_sync.$(disableSelector)) === !!enable) {
        spinner.info(
          `${Colors.value(course.name)} nightly grade sync already ${enable ? 'enabled' : 'disabled'}`
        );
      } else {
        if (enable) {
          await grade_sync.locator(enableSelector).click();
          await grade_sync.locator(disableSelector).wait();
          spinner.succeed(
            `${Colors.value(course.name)} nightly grade sync enabled`
          );
        } else {
          await grade_sync.locator(disableSelector).click();
          await grade_sync.locator(enableSelector).wait();
          spinner.succeed(
            `${Colors.value(course.name)} nightly grade sync disabled`
          );
        }
      }

      if (assignment_group && category) {
        spinner.start(
          `Associating ${Colors.value(assignment_group)} assigment group with assignment category ${Colors.value(category)}`
        );
        await tab.goto(
          `${Canvas.client().instance_url}/courses/${course.id}/assignments`
        );
        await tab.locator('#course_assignment_settings_link').click();
        await tab.locator('[aria-label="Sync SIS Categories"]').click();
        const grade_categories = await tab.waitForFrame(async (frame) => {
          const frameElement = await frame.frameElement();
          if (!frameElement) {
            return false;
          }
          const title = await frameElement.evaluate((el) =>
            el.getAttribute('title')
          );
          return title === 'Sync SIS Categories';
        });
        await grade_categories
          .locator('main [data-toggle="show-synced-categories"]')
          .wait();
        await grade_categories.$$eval(
          'main [data-toggle="show-synced-categories"]',
          async (toggles, assignment_group) => {
            for (const toggle of toggles) {
              const title = toggle.querySelector(
                'span[direction="row"] span'
              ).innerText;
              if (title === assignment_group) {
                await toggle.querySelector('button').click();
              }
              return;
            }
          },
          assignment_group
        );
        await grade_categories
          .locator('[data-select="select-sis-category"][value]')
          .wait();
        await grade_categories
          .locator('[data-select="select-sis-category"]')
          .fill(category);
        await grade_categories
          .locator('[data-button="save-category-matching"')
          .click();
        await grade_categories.locator('div[role="alert"]:not(:empty)').wait();
        spinner.succeed(
          `${Colors.value(course.name)}: assignment group ${Colors.value(assignment_group)} associated with assigment category ${Colors.value(category)}`
        );
      }
    }
  }
  //await browser.close();
}
