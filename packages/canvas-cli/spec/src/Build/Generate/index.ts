import { PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Core } from '@battis/qui-cli.core';
import * as Plugin from '@battis/qui-cli.plugin';
import { Root } from '@battis/qui-cli.root';
import fs from 'node:fs';
import path from 'node:path';
import * as Download from '../Download.js';
import * as Resources from './Resources.js';

type Configuration = Plugin.Configuration & {
  specPath?: PathString;
  templatePath?: PathString;
  outputPath?: PathString;
  resourceDirName?: string;
};

export const name = 'generate';
export const src = path.resolve(import.meta.dirname, '../..');

let specPath = './spec';
let templatePath = './templates';
let outputPath = './src';
let resourceDirName = 'Resources';

export function configure(config: Configuration = {}) {
  specPath = path.resolve(
    Root.path(),
    Plugin.hydrate(config.specPath, specPath)
  );
  templatePath = path.resolve(
    Root.path(),
    Plugin.hydrate(config.templatePath, templatePath)
  );
  outputPath = path.resolve(
    Root.path(),
    Plugin.hydrate(config.outputPath, outputPath)
  );
  resourceDirName = Plugin.hydrate(config.resourceDirName, resourceDirName);
}

export function options(): Plugin.Options {
  return {
    opt: {
      specPath: {
        description: `Path to Swagger spec file or directory (default: ${Colors.url(specPath)})`,
        default: specPath
      },
      templatePath: {
        description: `Path to Mustache template directory (default: ${Colors.url(templatePath)})`,
        default: templatePath
      },
      outputPath: {
        description: `Path to output directory (default: ${Colors.url(outputPath)})`,
        default: outputPath
      },
      resourceDirName: {
        description: `Name of resource definitions directory (default: ${Colors.quotedValue(`"${resourceDirName}"`)})`,
        default: resourceDirName
      }
    }
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  configure(args.values);
}

export async function run(results?: Plugin.AccumulatedResults) {
  let specPaths: PathString[] | undefined = undefined;
  if (results && results[Download.name]) {
    specPaths = results[Download.name];
  } else if (fs.lstatSync(specPath).isDirectory()) {
    specPaths = fs
      .readdirSync(specPath)
      .filter((fileName) => !fileName.startsWith('.'))
      .map((fileName) => path.join(specPath, fileName));
  } else {
    specPaths = [specPath];
  }
  if (!specPaths) {
    throw new Error('No specPaths defined or received from Downloads');
  }
  await Resources.generate({
    specPaths,
    templatePath,
    outputPath,
    resourceDirName
  });
}

await Plugin.register({ name, src, configure, options, init, run });
Root.configure({ root: process.cwd() });
await Core.run();
