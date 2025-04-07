import { PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Root } from '@battis/qui-cli.root';
import * as Swagger from '@groton/swagger-spec-ts';
import Mustache from 'mustache';
import fs from 'node:fs';
import path from 'node:path';
import * as prettier from 'prettier';
import {
  AnnotatedOperation,
  AnnotatedParameter,
  TSName,
  TSReference
} from './Annotation.js';
import * as Models from './Models.js';
import { Overrides } from './Overrides.js';
import { toTSDeprecation, toTSPropertyName, toTSType } from './TypeScript.js';

type GenerateOptions = Models.Annotation & {
  overrides?: Overrides;
  outputPath: PathString;
  templatePath: PathString;
  operationsDirName: string;
};

type OutputOptions = Annotation & GenerateOptions;

type Annotation = Models.Annotation & {
  operations: Record<PathString, AnnotatedOperation>;
};

export async function generate({ spec, models, ...output }: GenerateOptions) {
  const annotation = annotateOperations({ spec, models });
  annotateImports(annotation);
  await outputOperations({ ...annotation, ...output });
}

export function annotateOperations(annotation: Models.Annotation): Annotation {
  const operations: Record<PathString, AnnotatedOperation> = {};
  for (const specPath in annotation.spec) {
    for (const spec of annotation.spec[specPath]) {
      for (const endpoint of spec.apis) {
        for (const operation of endpoint.operations || []) {
          const tsImports: TSReference[] = [];
          const tsName = toTSMethodName(operation);
          let tsType = toTSType(operation);
          if (tsType.type === 'unknown' && operation.type) {
            tsType = {
              type: operation.type,
              tsReference: { type: operation.type }
            };
          }
          if (tsType.tsReference) {
            tsImports.push(tsType.tsReference);
          }
          // @ts-expect-error 2322
          const annotatedOperation: AnnotatedOperation = {
            ...operation,
            specPath,
            tsImports,
            tsType,
            tsEndpoint: endpoint.path,
            tsName
          };
          annotatedOperation.tsFilePath = path.join(
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
                tsReference: { type: parameter.type }
              };
            }
            if (annotatedParameter.tsType.tsReference) {
              annotatedOperation.tsImports!.push(
                annotatedParameter.tsType.tsReference
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

          operations[annotatedOperation.tsFilePath] = annotatedOperation;
        }
      }
    }
  }
  return { ...annotation, operations };
}

function annotateImports(
  { operations, models }: Annotation,
  overrides?: Overrides
) {
  for (const filePath in operations) {
    for (const tsImport of operations[filePath].tsImports || []) {
      tsImport.filePath =
        // look first for definitions local to the same spec file
        Object.keys(models).find((filePath) =>
          models[filePath].find(
            (model) =>
              model.specPath === operations[filePath]?.specPath &&
              model.tsName == tsImport.type
          )
        ) ||
        // check for overrides
        overrides?.tsReferences?.find(
          (tsReference) => tsReference.type == tsImport.type
        )?.filePath ||
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
      }
    // eslint-disable-next-line no-fallthrough
    case 'PUT':
      if (operation.nickname.startsWith('update_')) {
        return 'update';
      }
    // eslint-disable-next-line no-fallthrough
    default:
      return operation.nickname;
  }
}

async function outputOperations({
  operations,
  templatePath,
  outputPath,
  operationsDirName
}: OutputOptions) {
  const template = fs
    .readFileSync(path.resolve(Root.path(), templatePath, 'Operation.mustache'))
    .toString();
  for (const filePath in operations) {
    const tsFilePath = path.resolve(
      Root.path(),
      outputPath,
      operationsDirName,
      '.' + filePath
    );
    if (!fs.existsSync(path.dirname(tsFilePath))) {
      fs.mkdirSync(path.dirname(tsFilePath), { recursive: true });
    }
    try {
      fs.writeFileSync(
        tsFilePath,
        await prettier.format(
          Mustache.render(template, {
            ...operations[filePath],
            tsImports: operations[filePath].tsImports?.map((tsImport) => {
              if (tsImport.filePath) {
                tsImport.filePath = path
                  .relative(filePath, tsImport.filePath)
                  .replace(/\.ts$/, '.js');
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      throw new Error(`Error prettifying ${Colors.url(tsFilePath)}`);
    }
  }
}
