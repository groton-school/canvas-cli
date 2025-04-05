import { PathString, URLString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import { Root } from '@battis/qui-cli.root';
import * as Swagger from '@groton/swagger-spec-ts';
import fetch from 'node-fetch';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';
import PQueue from 'p-queue';

type Configuration = Plugin.Configuration & {
  instanceUrl?: URLString;
  specPath?: PathString;
};

export const name = 'download';
export const src = import.meta.dirname;

let instanceUrl = 'https://canvas.instructure.com';
let specPath = './spec';

export function configure(config: Configuration = {}) {
  instanceUrl = Plugin.hydrate(config.instanceUrl, instanceUrl);
  specPath = Plugin.hydrate(config.specPath, specPath);
}

export function options(): Plugin.Options {
  return {
    opt: {
      instanceUrl: {
        description: `URL of the Canvas instance from which to download the Swagger API spec (default: ${Colors.url(instanceUrl)})`,
        default: instanceUrl
      },
      specPath: {
        description: `Path to store the downloaded spec files (default: ${Colors.url(specPath)})`,
        default: specPath
      }
    }
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  configure(args.values);
}

export async function run() {
  const spinner = ora(`Downloading Swagger API definition`).start();
  const queue = new PQueue({ interval: 1000 });
  instanceUrl = path.join(instanceUrl, 'doc/api');
  specPath = path.resolve(Root.path(), specPath);
  if (!fs.existsSync(specPath)) {
    fs.mkdirSync(specPath, { recursive: true });
  }
  const paths = ['/api-docs.json'];
  const result: PathString[] = [];
  do {
    await queue.add(async () => {
      const url = new URL(instanceUrl + paths.pop());
      spinner.text = Colors.url(url);
      const response = await fetch(url);
      if (response.ok) {
        const text = await response.text();
        try {
          const swagger = JSON.parse(text) as Swagger.v1p2.ResourceListing;
          const filePath = path.join(specPath, path.basename(url.toString()));
          fs.writeFileSync(filePath, text);
          result.push(filePath);
          if (swagger.apis) {
            swagger.apis.map((api) => {
              if (api.path.endsWith('.json')) {
                paths.push(api.path);
              }
            });
          }
          spinner.succeed(url.toString());
        } catch (error) {
          spinner.fail(`${Colors.url(url)}: ${Colors.error(error)}`);
        }
      } else {
        spinner.fail(
          `${Colors.url(url)}: ${Colors.error(`${response.status} ${response.statusText}`)}`
        );
      }
    });
  } while (paths.length);
  Log.info(`Spec files written to ${Colors.url(specPath)}`);
  return result;
}
