import { PathString } from '@battis/descriptive-types';
import * as Swagger from '@groton/swagger-spec-ts';
import Handlebars from 'handlebars';
import fs from 'node:fs';
import path from 'node:path';
import { AnnotatedOperation, AnnotatedParameter } from './Annotation.js';
import { importPath } from './importPath.js';
import * as Models from './Models.js';
import * as Overrides from './Overrides.js';
import { TSName, TSReference } from './TSAnnotation.js';
import {
  toTSDeprecation,
  toTSNamespace,
  toTSPropertyName,
  toTSType
} from './TypeScript.js';
import { writePrettier } from './writePrettier.js';

type GenerateOptions = Models.Annotation & {
  outputPath: PathString;
  templatePath: PathString;
};

type AnnotateOptions = Models.Annotation & { outputPath: PathString };

type OutputOptions = Annotation & GenerateOptions;

type Annotation = Models.Annotation & {
  operations: Record<PathString, AnnotatedOperation>;
};

export async function generate({
  spec,
  models,
  outputPath,
  templatePath
}: GenerateOptions) {
  const annotation = annotateOperations({ spec, models, outputPath });
  annotateImports(annotation);
  await outputOperations({ ...annotation, outputPath, templatePath });
  await outputOperationIndices(outputPath, templatePath);
  return annotation;
}

export function annotateOperations({
  outputPath,
  ...annotation
}: AnnotateOptions): Annotation {
  const clientReference: TSReference = {
    type: 'client',
    filePath: path.join(outputPath, '../Client.ts')
  };
  const operations: Record<PathString, AnnotatedOperation> = {};
  for (const specPath in annotation.spec) {
    for (const spec of annotation.spec[specPath]) {
      for (const endpoint of spec.apis) {
        for (const operation of endpoint.operations || []) {
          const tsImports: TSReference[] = [{ ...clientReference }];
          const tsName = toTSMethodName(operation);
          let tsType = toTSType(operation);
          if (tsType.type === 'unknown' && operation.type) {
            tsType = {
              type: operation.type,
              tsReferences: [{ type: operation.type }]
            };
          }
          if (tsType.tsReferences) {
            tsImports.push(...tsType.tsReferences);
          }
          let tsPaginated: true | undefined = undefined;
          if (tsType.type.endsWith('[]')) {
            tsPaginated = true;
            tsImports.push({
              type: 'Paginated',
              packagePath: '@groton/canvas-cli.client.base'
            });
          }
          const tsUpload = tsName === 'upload';
          if (tsUpload) {
            tsImports.push({
              type: 'FileLocation',
              packagePath: '@groton/canvas-cli.client.base'
            });
          }

          // @ts-expect-error 2322
          const annotatedOperation: AnnotatedOperation = {
            ...operation,
            specPath,
            tsImports,
            tsType,
            tsEndpoint: decodeURIComponent(
              new URL(spec.basePath + endpoint.path).pathname
            ),
            tsName,
            tsUpload,
            tsPaginated
          };
          annotatedOperation.tsFilePath = path.join(
            outputPath,
            toOperationPath(endpoint.path, annotatedOperation),
            tsName + '.ts'
          );
          for (const parameter of operation.parameters) {
            const annotatedParameter: AnnotatedParameter = {
              ...parameter,
              tsDeprecation: toTSDeprecation(parameter),
              tsName: toTSPropertyName(parameter.name),
              tsType: toTSType(parameter)
            };
            if (annotatedParameter.tsType.type === 'unknown') {
              annotatedParameter.tsType = {
                type: parameter.type,
                tsReferences: [{ type: parameter.type }]
              };
            }
            if (annotatedParameter.tsType.tsReferences) {
              annotatedOperation.tsImports!.push(
                ...annotatedParameter.tsType.tsReferences
              );
            }

            const paramType = ('ts' +
              annotatedParameter.paramType[0].toUpperCase() +
              annotatedParameter.paramType.slice(1) +
              'Parameters') as
              | 'tsBodyParameters'
              | 'tsFormParameters'
              | 'tsQueryParameters'
              | 'tsPathParameters';
            if (!(paramType in annotatedOperation)) {
              annotatedOperation[paramType] = [];
            }
            if (Array.isArray(annotatedOperation[paramType])) {
              // @ts-expect-error 2345
              annotatedOperation[paramType].push(annotatedParameter);
            }
          }

          operations[annotatedOperation.tsFilePath] =
            Overrides.operation(annotatedOperation);
        }
      }
    }
  }
  return { ...annotation, operations };
}

function annotateImports({ operations, models }: Annotation) {
  for (const filePath in operations) {
    operations[filePath].tsImports = operations[filePath].tsImports?.reduce(
      (tsImports, tsReference) => {
        const match = tsImports.find((t) => t.type === tsReference.type);
        if (!match) {
          tsImports.push(tsReference);
        } else {
          if (
            (match.filePath && match.filePath !== tsReference.filePath) ||
            (match.packagePath && match.packagePath !== tsReference.packagePath)
          ) {
            throw new TypeError(
              `Importing two identically named objects from different files: ${JSON.stringify({ tsReference, match })}.`
            );
          }
        }
        return tsImports;
      },
      [] as TSReference[]
    );
    for (const tsImport of operations[filePath].tsImports || []) {
      tsImport.filePath =
        tsImport.filePath ||
        // look first for definitions local to the same spec file
        Object.keys(models).find((filePath) =>
          models[filePath].find(
            (model) =>
              model.specPath === operations[filePath]?.specPath &&
              model.tsName == tsImport.type
          )
        ) ||
        // check for overrides
        Overrides.tsReference(tsImport.type)?.filePath ||
        // find what's available
        Object.keys(models).find((filePath) =>
          models[filePath].map((model) => model.tsName).includes(tsImport.type)
        );
    }
  }
}

function toOperationPath(
  endpointPath: Swagger.v1p2.ApiObject['path'],
  operation: AnnotatedOperation
): PathString {
  return operation.parameters
    .reduce((tsFilePath, parameter) => {
      if (parameter.paramType === 'path') {
        return tsFilePath.replace(new RegExp(`{${parameter.name}}/?`), '');
      }
      return tsFilePath;
    }, endpointPath)
    .split('/')
    .map((token) =>
      token.length
        ? token
            .split('_')
            .map((t) => t[0].toUpperCase() + t.slice(1))
            .join('')
        : undefined
    )
    .join('/');
}

function toTSMethodName(operation: Swagger.v1p2.OperationObject): TSName {
  switch (operation.method) {
    case 'GET':
      if (operation.nickname.startsWith('list_')) {
        return 'list';
      }
      if (operation.nickname.startsWith('get_')) {
        return 'get';
      }
    // eslint-disable-next-line no-fallthrough
    case 'POST':
      if (operation.nickname.startsWith('create_')) {
        return 'create';
      } else if (operation.nickname.startsWith('upload_file')) {
        return 'upload';
      }
    // eslint-disable-next-line no-fallthrough
    case 'PUT':
      if (
        operation.nickname.startsWith('update_') ||
        operation.nickname.startsWith('edit_')
      ) {
        return 'update';
      }
    // eslint-disable-next-line no-fallthrough
    case 'PATCH':
      if (operation.nickname.startsWith('batch_update_')) {
        return 'batchUpdate';
      }
    // eslint-disable-next-line no-fallthrough
    default:
      return operation.nickname;
  }
}

async function outputOperations({ operations, templatePath }: OutputOptions) {
  const template = Handlebars.compile(
    fs.readFileSync(path.join(templatePath, 'Operation.handlebars')).toString()
  );
  for (const filePath in operations) {
    await writePrettier(
      filePath,
      template({
        ...operations[filePath],
        tsImports: operations[filePath].tsImports?.map((tsImport) => {
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

async function outputOperationIndices(
  outputPath: PathString,
  templatePath: PathString
) {
  const template = Handlebars.compile(
    fs
      .readFileSync(path.join(templatePath, 'OperationIndex.handlebars'))
      .toString()
  );
  async function recursiveIndex(outputPath: PathString) {
    const modules = await Promise.all(
      fs
        .readdirSync(outputPath)
        .filter((fileName) => !fileName.startsWith('.'))
        .map((fileName) => ({
          tsNamespace: `as ${toTSNamespace(fileName)}`,
          filePath: path.join(outputPath, fileName)
        }))
        .map(async (module) => {
          if (fs.lstatSync(module.filePath).isDirectory()) {
            await recursiveIndex(module.filePath);
            module.filePath = path.join(module.filePath, 'index.ts');
          } else {
            module.tsNamespace = '';
          }
          return module;
        })
    );
    const filePath = path.join(outputPath, 'index.ts');
    await writePrettier(
      filePath,
      template({
        modules: modules.map((module) => ({
          ...module,
          filePath: importPath(filePath, module.filePath)
        }))
      })
    );
  }
  await recursiveIndex(outputPath);
}
