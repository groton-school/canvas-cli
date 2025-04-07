import { PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Core } from '@battis/qui-cli.core';
import * as Plugin from '@battis/qui-cli.plugin';
import { Root } from '@battis/qui-cli.root';
import fs from 'node:fs';
import path from 'node:path';
import * as Download from '../Download.js';
import * as Models from './Models.js';
import * as Operations from './Operations.js';
import { Overrides } from './Overrides.js';

type Configuration = Plugin.Configuration & {
  specPath?: PathString;
  overridePath?: PathString;
  templatePath?: PathString;
  outputPath?: PathString;
  modelDirName?: string;
  operationsDirName?: string;
  prettierConfigPath?: PathString;
};

export const name = 'generate';
export const src = path.resolve(import.meta.dirname, '../..');

let specPath = './spec';
let overridePath = './overrides.json';
let templatePath = './templates';
let outputPath = './src';
let modelDirName = 'Resources';
let operationsDirName = 'Endpoints';
let prettierConfigPath = './.prettierrc.json';

export function configure(config: Configuration = {}) {
  specPath = Plugin.hydrate(config.specPath, specPath);
  overridePath = Plugin.hydrate(config.overridePath, overridePath);
  templatePath = Plugin.hydrate(config.templatePath, templatePath);
  outputPath = Plugin.hydrate(config.outputPath, outputPath);
  modelDirName = Plugin.hydrate(config.modelDirName, modelDirName);
  operationsDirName = Plugin.hydrate(config.endpointDirName, operationsDirName);
  prettierConfigPath = Plugin.hydrate(
    config.prettierConfigPath,
    prettierConfigPath
  );
}

export function options(): Plugin.Options {
  return {
    opt: {
      specPath: {
        description: `Path to Swagger spec file or directory (default: ${Colors.url(specPath)})`,
        default: specPath
      },
      overridePath: {
        description: `Path to TypeScript types override JSON file (default: ${Colors.url(overridePath)})`,
        default: overridePath
      },
      templatePath: {
        description: `Path to Mustache template directory (default: ${Colors.url(templatePath)})`,
        default: templatePath
      },
      outputPath: {
        description: `Path to output directory (default: ${Colors.url(outputPath)})`,
        default: outputPath
      },
      modelDirName: {
        description: `Name of resource definitions directory (default: ${Colors.quotedValue(`"${modelDirName}"`)})`,
        default: modelDirName
      },
      operationsDirName: {
        description: `Name of endpoint definitions directory (default: ${Colors.quotedValue(`"${operationsDirName}"`)})`,
        default: operationsDirName
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
  const overrides = JSON.parse(
    fs.readFileSync(path.resolve(Root.path(), overridePath)).toString()
  ) as Overrides;
  const outputOptions = { templatePath, outputPath };
  const models = await Models.generate({
    specPaths,
    overrides,
    modelDirName,
    ...outputOptions
  });
  await Operations.generate({
    ...models,
    operationsDirName,
    ...outputOptions
  });
}

await Plugin.register({ name, src, configure, options, init, run });
Root.configure({ root: process.cwd() });
await Core.run();
