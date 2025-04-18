import { PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import { Root } from '@battis/qui-cli.root';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';
import * as Download from '../Download.js';
import * as Models from './Models.js';
import * as Operations from './Operations.js';
import * as Overrides from './Overrides.js';

Root.configure({ root: process.cwd() });

type Configuration = Plugin.Configuration & {
  specPath?: PathString;
  overridePath?: PathString;
  templatePath?: PathString;
  outputPath?: PathString;
  modelDirName?: string;
  operationsDirName?: string;
  prettierConfigPath?: PathString;
  map?: boolean;
};

export const name = 'render';
export const src = path.dirname(import.meta.dirname);

let specPath = './spec';
let overridePath: string | undefined;
let templatePath = path.resolve(import.meta.dirname, '../../templates');
let outputPath = './src';
let modelDirName = 'Resources';
let operationsDirName = 'Endpoints';
let prettierConfigPath = './.prettierrc.json';
let map = false;

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
  map = Plugin.hydrate(config.map, map);
}

export function options(): Plugin.Options {
  return {
    flag: {
      map: {
        description: `Output the annotated code map (default: ${Colors.value(map)})`,
        default: map
      }
    },
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
        description: `Path to Handlebars template directory (default: ${Colors.url(templatePath)})`,
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
  const spinner = ora(`Looking for specs`).start();
  let specPaths: PathString[] | undefined = undefined;
  specPath = path.resolve(Root.path(), specPath);
  if (results && results[Download.name]) {
    specPaths = results[Download.name];
    spinner.text = `Using specs provided by download`;
  } else if (fs.lstatSync(specPath).isDirectory()) {
    specPaths = fs
      .readdirSync(specPath)
      .filter((fileName) => !fileName.startsWith('.'))
      .map((fileName) => path.join(specPath, fileName));
    spinner.text = `Using specs found in directory ${Colors.url(specPath)}`;
  } else {
    specPaths = [specPath];
    spinner.text = `Using spec file ${Colors.url(specPath)}}`;
  }
  if (!specPaths) {
    spinner.fail(`No specs found`);
    throw new Error('No specPaths defined or received from Downloads');
  }
  spinner.succeed(`Loaded specs`);

  templatePath = path.resolve(Root.path(), templatePath);
  Log.info(`Templates will be read from ${Colors.url(templatePath)}`);
  outputPath = path.resolve(Root.path(), outputPath);
  Log.info(
    `Rendered TypeScript files will be written to ${Colors.url(outputPath)}`
  );

  spinner.start(`Checking for overrides`);
  Overrides.setOutputPath(outputPath);
  if (overridePath) {
    overridePath = path.resolve(Root.path(), overridePath);
    Overrides.setOverrides(
      JSON.parse(fs.readFileSync(overridePath).toString())
    );
    spinner.succeed(`Overrides loaded from ${Colors.url(overridePath)}`);
  } else {
    spinner.info(`No overrides`);
  }

  const { spec, models } = await Models.generate({
    specPaths,
    templatePath,
    outputPath: path.join(outputPath, modelDirName)
  });
  const operations = await Operations.generate({
    spec,
    models,
    templatePath,
    outputPath: path.join(outputPath, operationsDirName)
  });
  if (map) {
    fs.writeFileSync(
      path.join(outputPath, 'map.json'),
      JSON.stringify(operations, null, 2)
    );
  }
}
