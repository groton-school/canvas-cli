import { PathString } from '@battis/descriptive-types';
import { Root } from '@battis/qui-cli.root';
import * as Swagger from '@groton/swagger-spec-ts';
import Mustache from 'mustache';
import fs from 'node:fs';
import path from 'node:path';
import * as prettier from 'prettier';
import {
  AnnotatedApi,
  AnnotatedModel,
  AnnotatedProperty,
  TSName,
  TSReference,
  TSType
} from './Annotation.js';
import {
  toTSDeprecation,
  toTSExport,
  toTSNamespace,
  toTSPropertyName,
  toTSType,
  toTSTypeName
} from './TypeScript.js';

type GenerateOptions = {
  specPaths: PathString[];
  outputPath: PathString;
  templatePath: PathString;
};

type IndexedResourceModels = {
  resources: ResourceList;
  index: TypeIndex;
};

type OutputOptions = IndexedResourceModels & Omit<GenerateOptions, 'specPaths'>;

type ResourceList = Record<PathString, AnnotatedApi>;
type TypeIndex = Record<PathString, TSName[]>;

const PRETTIER_CONFIG: Partial<prettier.RequiredOptions> = {
  parser: 'typescript',
  singleQuote: true,
  trailingComma: 'none',
  xmlWhitespaceSensitivity: 'ignore',
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-jsdoc']
};

export async function generate({
  specPaths,
  outputPath,
  templatePath
}: GenerateOptions) {
  const resourceModels = annotateFileList(specPaths);
  annotateExports(resourceModels);
  const outputOptions = {
    templatePath,
    outputPath,
    ...resourceModels
  };
  await outputResources(outputOptions);
  await outputResourceIndex(outputOptions);
}

function annotateFileList(specPaths: PathString[]): IndexedResourceModels {
  const resources: Record<PathString, AnnotatedApi> = {};
  const index: Record<PathString, TSName[]> = {};
  for (const filePath of specPaths) {
    const tsFilePath = toRelativeResourcePath(
      path.join('./', path.basename(filePath))
    );
    resources[tsFilePath] = annotateJSONFile(filePath);
    index[tsFilePath] = resources[tsFilePath].models.map(
      (model) => model.tsName
    );
  }
  return { resources, index };
}

function annotateJSONFile(specPath: PathString): AnnotatedApi {
  const api = JSON.parse(
    fs.readFileSync(specPath).toString()
  ) as Swagger.v1p2.ApiDeclaration;
  return {
    ...api,
    models: annotateApiDeclaration(api)
  };
}

function annotateApiDeclaration(
  api: Swagger.v1p2.ApiDeclaration
): AnnotatedModel[] {
  const annotatedModels: AnnotatedModel[] = [];

  for (const modelId in api.models) {
    const model = api.models[modelId];
    const properties: AnnotatedProperty[] = [];
    const tsImports: TSType[] = [];
    for (const propertyId in model.properties) {
      const property = model.properties[propertyId];
      const annotatedProperty: AnnotatedProperty = {
        ...property,
        tsDeprecation: toTSDeprecation(property),
        tsName: toTSPropertyName(propertyId),
        tsType: toTSType(property)
      };
      properties.push(annotatedProperty);
      if (annotatedProperty.tsType.tsReference) {
        tsImports.push(annotatedProperty.tsType.tsReference);
      }
    }

    const annotatedModel: AnnotatedModel = {
      ...model,
      tsImports,
      tsDeprecation: toTSDeprecation(model),
      tsName: toTSTypeName(modelId),
      properties
    };
    annotatedModel.tsExport = toTSExport(annotatedModel);
    annotatedModels.push(annotatedModel);
  }
  return annotatedModels.map((model) => {
    model.tsImports = model.tsImports?.filter(
      (tsType) => !annotatedModels.find((model) => model.tsName === tsType.type)
    );
    return model;
  });
}

function toRelativeResourcePath(filePath: PathString): PathString {
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

function annotateExports({ resources, index }: IndexedResourceModels) {
  for (const filePath in resources) {
    for (const model of resources[filePath].models) {
      for (const tsImport of model.tsImports || []) {
        tsImport.filePath = Object.keys(index).find((filePath) =>
          index[filePath].includes(tsImport.type)
        );
      }
    }
  }
}

async function outputResources({
  templatePath,
  outputPath,
  resources
}: OutputOptions) {
  const template = fs
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
}

async function outputResourceIndex({
  templatePath,
  outputPath,
  resources,
  index
}: OutputOptions) {
  const template = fs
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
