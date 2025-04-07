import { PathString } from '@battis/descriptive-types';
import { Root } from '@battis/qui-cli.root';
import * as Swagger from '@groton/swagger-spec-ts';
import Mustache from 'mustache';
import fs from 'node:fs';
import path from 'node:path';
import * as prettier from 'prettier';
import {
  AnnotatedModel,
  AnnotatedProperty,
  TSReference,
  TSType
} from './Annotation.js';
import { Overrides } from './Overrides.js';
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
  overrides?: Overrides;
  outputPath: PathString;
  templatePath: PathString;
  modelDirName: string;
};

type AnnotateOptions = {
  specPath: PathString;
  overrides?: Overrides;
  modelDirName: GenerateOptions['modelDirName'];
};

type OutputOptions = Annotation & Omit<GenerateOptions, 'specPaths'>;

export type Annotation = {
  spec: Record<PathString, Swagger.v1p2.ApiDeclaration[]>;
  models: Record<PathString, AnnotatedModel[]>;
};

export async function generate(options: GenerateOptions) {
  const annotations = annotateFileList(options);
  annotateImports(annotations, options.overrides);
  annotateExports(annotations, options.overrides);
  const outputOptions = {
    ...options,
    ...annotations
  };
  await outputModels(outputOptions);
  await outputModelIndex(outputOptions);
  return annotations;
}

function annotateFileList({
  specPaths,
  modelDirName
}: GenerateOptions): Annotation {
  const annotation: Annotation = { spec: {}, models: {} };
  for (const specPath of specPaths) {
    const annotatedSpec = annotateJSONFile({ specPath, modelDirName });
    annotation.spec = { ...annotation.spec, ...annotatedSpec.spec };
    annotation.models = { ...annotation.models, ...annotatedSpec.models };
  }
  return annotation;
}

function annotateJSONFile({
  specPath,
  modelDirName
}: AnnotateOptions): Annotation {
  const spec = JSON.parse(
    fs.readFileSync(specPath).toString()
  ) as Swagger.v1p2.ApiDeclaration;
  return {
    spec: { [specPath]: [spec] },
    models: {
      [toModelPath(modelDirName, specPath)]: annotateModels(spec, specPath)
    }
  };
}

function annotateModels(
  api: Swagger.v1p2.ApiDeclaration,
  specPath: PathString
): AnnotatedModel[] {
  const models: AnnotatedModel[] = [];

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
      specPath,
      ...model,
      tsImports,
      tsDeprecation: toTSDeprecation(model),
      tsName: toTSTypeName(modelId),
      properties
    };
    annotatedModel.tsExport = toTSExport(annotatedModel);
    /*
     * TODO force IDs to strings
     *   https://developerdocs.instructure.com/services/canvas#schema
     */
    models.push(annotatedModel);
  }
  return models.map((model) => {
    model.tsImports = model.tsImports?.filter(
      (tsType) => !models.find((model) => model.tsName === tsType.type)
    );
    return model;
  });
}

function annotateImports(annotation: Annotation, overrides?: Overrides) {
  for (const filePath in annotation.models) {
    for (const model of annotation.models[filePath]) {
      for (const tsImport of model.tsImports || []) {
        tsImport.filePath =
          overrides?.tsReferences?.find(
            (tsReference) => tsReference.type === tsImport.type
          )?.filePath ||
          Object.keys(annotation.models).find((filePath) =>
            annotation.models[filePath]
              .map((model) => model.tsName)
              .includes(tsImport.type)
          );
      }
    }
  }
}

function annotateExports(annotation: Annotation, overrides?: Overrides) {
  for (const filePath in annotation.models) {
    for (const model of annotation.models[filePath]) {
      for (const override of overrides?.annotatedModels || []) {
        if (model.tsName === override.tsName) {
          for (const prop of Object.getOwnPropertyNames(
            override
          ) as (keyof AnnotatedModel)[]) {
            // @ts-expect-error 2322
            model[prop] = override[prop];
          }
        }
      }
    }
  }
}

function toModelPath(modelDirName: string, specPath: PathString): PathString {
  return path.join(
    '/',
    modelDirName,
    path
      .basename(specPath, '.json')
      .split('_')
      .map((token) => token[0].toUpperCase() + token.slice(1))
      .join('') + '.ts'
  );
}

async function outputModels({
  templatePath,
  outputPath,
  modelDirName,
  models
}: OutputOptions) {
  const template = fs
    .readFileSync(path.resolve(Root.path(), templatePath, 'Model.mustache'))
    .toString();
  fs.mkdirSync(path.resolve(Root.path(), outputPath, modelDirName), {
    recursive: true
  });
  for (const filePath in models) {
    if (models[filePath].length) {
      const tsFilePath = path.resolve(Root.path(), outputPath, '.' + filePath);
      fs.writeFileSync(
        tsFilePath,
        await prettier.format(
          Mustache.render(template, {
            models: models[filePath],
            tsImports: models[filePath]
              .reduce((tsImports, model) => {
                for (const tsImport of model.tsImports || []) {
                  if (!tsImports.find((t) => t.type === tsImport.type)) {
                    tsImports.push(tsImport);
                  }
                }
                return tsImports;
              }, [] as TSReference[])
              .map((tsImport) => {
                if (tsImport.filePath) {
                  tsImport.filePath =
                    './' +
                    path.basename(tsImport.filePath).replace(/\.ts$/, '.js');
                }
                return tsImport;
              })
          }),
          {
            filePath: tsFilePath,
            ...(await prettier.resolveConfig(tsFilePath))
          }
        )
      );
    }
  }
}

async function outputModelIndex({
  templatePath,
  outputPath,
  modelDirName,
  models
}: OutputOptions) {
  const template = fs
    .readFileSync(
      path.resolve(Root.path(), templatePath, 'ModelIndex.mustache')
    )
    .toString();
  const tsFilePath = path.resolve(
    Root.path(),
    outputPath,
    modelDirName,
    'index.ts'
  );
  fs.writeFileSync(
    tsFilePath,
    await prettier.format(
      Mustache.render(template, {
        index: Object.keys(models)
          .filter((filePath) => models[filePath].length)
          .map((filePath) => ({
            tsNamespace: toTSNamespace(filePath),
            filePath: './' + path.basename(filePath).replace(/\.ts$/, '.js')
          }))
      }),
      { filePath: tsFilePath, ...(await prettier.resolveConfig(tsFilePath)) }
    )
  );
}
