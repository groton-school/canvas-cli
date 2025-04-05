import { PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Core } from '@battis/qui-cli.core';
import * as Plugin from '@battis/qui-cli.plugin';
import { Root } from '@battis/qui-cli.root';
import * as Swagger from '@groton/swagger-spec-ts';
import Mustache from 'mustache';
import fs from 'node:fs';
import path from 'node:path';
import * as prettier from 'prettier';
import * as Download from '../Download.js';
import { AnnotatedApi, TSName, TSReference } from './Annotation.js';
import * as Resource from './Resource.js';

type Configuration = Plugin.Configuration & {
  specPath?: PathString;
  templatePath?: PathString;
  outputPath?: PathString;
};

const PRETTIER_CONFIG = {
  parser: 'typescript',
  singleQuote: true,
  trailingComma: 'none',
  xmlWhitespaceSensitivity: 'ignore',
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-jsdoc']
};

export const name = 'generate';
export const src = path.dirname(import.meta.dirname);

let specPath = './spec';
let templatePath = './templates';
let outputPath = './src';

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
      }
    }
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  configure(args.values);
}

export async function run(results?: Plugin.AccumulatedResults) {
  const resources: Record<PathString, AnnotatedApi> = {};
  const index: Record<PathString, TSName[]> = {};

  if (results && results[Download.name]) {
    for (const filePath of results[Download.name]) {
      const tsFilePath = toTSFilePath(path.join('./', path.basename(filePath)));
      const api = JSON.parse(
        fs.readFileSync(filePath).toString()
      ) as Swagger.v1p2.ApiDeclaration;
      resources[tsFilePath] = { ...api, models: Resource.annotate(api) };
      index[tsFilePath] = resources[tsFilePath].models.map(
        (model) => model.tsName
      );
    }
  } else if (fs.lstatSync(specPath).isDirectory()) {
    const fileNames = fs.readdirSync(specPath);
    for (const fileName of fileNames) {
      if (!fileName.startsWith('.')) {
        const filePath = path.join(specPath, fileName);
        const tsFilePath = toTSFilePath(path.join('./', fileName));
        const api = JSON.parse(
          fs.readFileSync(filePath).toString()
        ) as Swagger.v1p2.ApiDeclaration;
        resources[tsFilePath] = { ...api, models: Resource.annotate(api) };
        index[tsFilePath] = resources[tsFilePath].models.map(
          (model) => model.tsName
        );
      }
    }
  } else {
    const api = JSON.parse(
      fs.readFileSync(specPath).toString()
    ) as Swagger.v1p2.ApiDeclaration;
    resources[toTSFilePath(specPath)] = {
      ...api,
      models: Resource.annotate(api)
    };
  }

  for (const filePath in resources) {
    for (const model of resources[filePath].models) {
      for (const tsImport of model.tsImports || []) {
        tsImport.filePath = Object.keys(index).find((filePath) =>
          index[filePath].includes(tsImport.type)
        );
      }
    }
  }

  let template = fs
    .readFileSync(path.resolve(Root.path(), templatePath, 'Resource.mustache'))
    .toString();
  fs.mkdirSync(path.resolve(Root.path(), outputPath, 'Resources'), {
    recursive: true
  });
  for (const filePath in resources) {
    if (resources[filePath].models.length) {
      fs.writeFileSync(
        path.resolve(
          Root.path(),
          outputPath,
          'Resources',
          path.basename(filePath, '.js') + '.ts'
        ),
        await prettier.format(
          Mustache.render(template, {
            ...resources[filePath],
            tsImports: resources[filePath].models.reduce((tsImports, model) => {
              for (const tsImport of model.tsImports || []) {
                if (!tsImports.find((t) => t.type === tsImport.type)) {
                  tsImports.push(tsImport);
                }
              }
              return tsImports;
            }, [] as TSReference[])
          }),
          PRETTIER_CONFIG
        )
      );
    }
  }
  template = fs
    .readFileSync(
      path.resolve(Root.path(), templatePath, 'ResourceIndex.mustache')
    )
    .toString();
  fs.writeFileSync(
    path.resolve(Root.path(), outputPath, 'Resources', 'index.ts'),
    await prettier.format(
      Mustache.render(template, {
        index: Object.keys(index)
          .filter((filePath) => resources[filePath].models.length)
          .map((filePath) => ({
            tsNamespace: toTSNamespace(filePath),
            filePath
          }))
      }),
      PRETTIER_CONFIG
    )
  );
}

function toTSFilePath(filePath: PathString) {
  return (
    './' +
    path
      .basename(filePath, '.json')
      .split('_')
      .map((token) => token[0].toUpperCase() + token.slice(1))
      .join('') +
    '.js'
  );
}

function toTSNamespace(filePath: PathString) {
  return path.basename(filePath, '.js').replace(/[^a-z0-9_]+/gi, '_');
}

await Plugin.register({ name, src, configure, options, init, run });
Root.configure({ root: process.cwd() });
await Core.run();
