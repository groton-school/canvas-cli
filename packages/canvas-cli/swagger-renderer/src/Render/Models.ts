import { PathString } from '@battis/descriptive-types';
import * as Swagger from '@groton/swagger-spec-ts';
import Handlebars from 'handlebars';
import fs from 'node:fs';
import path from 'node:path';
import { AnnotatedModel, AnnotatedProperty } from './Annotation.js';
import { importPath } from './importPath.js';
import * as Overrides from './Overrides.js';
import { TSReference, TSType } from './TSAnnotation.js';
import {
  toTSDeprecation,
  toTSExport,
  toTSNamespace,
  toTSPropertyName,
  toTSType,
  toTSTypeName
} from './TypeScript.js';
import { writePrettier } from './writePrettier.js';

type GenerateOptions = {
  specPaths: PathString[];
  templatePath: PathString;
  outputPath: PathString;
};

type AnnotateOptions = {
  specPath: PathString;
  outputPath: PathString;
};

type OutputOptions = Annotation & Omit<GenerateOptions, 'specPaths'>;

export type Annotation = {
  spec: Record<PathString, Swagger.v1p2.ApiDeclaration[]>;
  models: Record<PathString, AnnotatedModel[]>;
};

export async function generate(options: GenerateOptions) {
  const annotations = annotateFileList(options);
  annotateImports(annotations);
  const outputOptions = {
    ...options,
    ...annotations
  };
  await outputModels(outputOptions);
  await outputModelIndex(outputOptions);
  return annotations;
}

function annotateFileList({
  outputPath,
  specPaths
}: GenerateOptions): Annotation {
  const annotation: Annotation = { spec: {}, models: {} };
  for (const specPath of specPaths) {
    const annotatedSpec = annotateJSONFile({ specPath, outputPath });
    annotation.spec = { ...annotation.spec, ...annotatedSpec.spec };
    annotation.models = { ...annotation.models, ...annotatedSpec.models };
  }
  return annotation;
}

function annotateJSONFile({
  specPath,
  outputPath
}: AnnotateOptions): Annotation {
  const spec = JSON.parse(
    fs.readFileSync(specPath).toString()
  ) as Swagger.v1p2.ApiDeclaration;
  return {
    spec: { [specPath]: [spec] },
    models: {
      [toFilePath(outputPath, specPath)]: annotateModels(spec, specPath)
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
      if (annotatedProperty.tsType.tsReferences) {
        tsImports.push(...annotatedProperty.tsType.tsReferences);
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

function annotateImports(annotation: Annotation) {
  for (const filePath in annotation.models) {
    for (const model of annotation.models[filePath]) {
      for (const tsImport of model.tsImports || []) {
        tsImport.filePath =
          Overrides.tsReference(tsImport.type)?.filePath ||
          Object.keys(annotation.models).find((filePath) =>
            annotation.models[filePath]
              .map((model) => model.tsName)
              .includes(tsImport.type)
          );
      }
    }
  }
}

async function outputModels({
  templatePath,
  outputPath,
  models
}: OutputOptions) {
  const template = Handlebars.compile(
    fs.readFileSync(path.join(templatePath, 'Model.handlebars')).toString()
  );
  fs.mkdirSync(outputPath, { recursive: true });
  for (const filePath in models) {
    if (models[filePath].length) {
      await writePrettier(
        filePath,
        template({
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
                return {
                  ...tsImport,
                  filePath: importPath(filePath, tsImport.filePath)
                };
              }
              return tsImport;
            })
        })
      );
    }
  }
}

async function outputModelIndex({
  templatePath,
  outputPath,
  models
}: OutputOptions) {
  const template = Handlebars.compile(
    fs.readFileSync(path.join(templatePath, 'ModelIndex.handlebars')).toString()
  );
  await writePrettier(
    path.join(outputPath, 'index.ts'),
    template({
      index: Object.keys(models)
        .filter((filePath) => models[filePath].length)
        .map((filePath) => ({
          tsNamespace: toTSNamespace(filePath),
          filePath: importPath(path.join(outputPath, 'index.ts'), filePath)
        }))
    })
  );
}

function toFilePath(outputPath: string, specPath: PathString): PathString {
  return path.join(
    outputPath,
    path
      .basename(specPath, '.json')
      .split('_')
      .map((token) => token[0].toUpperCase() + token.slice(1))
      .join('') + '.ts'
  );
}
