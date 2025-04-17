import { PathString } from '@battis/descriptive-types';
import * as Swagger from '@groton/swagger-spec-ts';
import path from 'node:path';
import * as Annotations from '../../Annotations/index.js';
import * as Models from '../../Models/index.js';
import {
  PostTransformAnnotatedOperation,
  PreTransformSwaggerOperation
} from '../../Transforms/index.js';
import { Annotation } from '../Annotation.js';

export type Options = Models.Annotation & {
  outputPath: PathString;
  preTransforms?: PreTransformSwaggerOperation[];
  postTransforms?: PostTransformAnnotatedOperation[];
};

export async function annotateOperations({
  outputPath,
  preTransforms = [],
  postTransforms = [],
  ...annotation
}: Options): Promise<Annotation> {
  const clientReference: Annotations.TypeScript.Reference = {
    type: 'client',
    filePath: path.join(outputPath, '../Client.ts')
  };
  const operations: Annotation['operations'] = {};
  for (const specPath in annotation.spec) {
    for (const spec of annotation.spec[specPath]) {
      for (const endpoint of spec.apis) {
        for (let operation of endpoint.operations || []) {
          for (const transform of preTransforms) {
            operation = await transform(operation);
          }
          const tsImports: Annotations.TypeScript.Reference[] = [
            { ...clientReference }
          ];
          const tsName = Annotations.toTSMethodName(operation);
          let tsType = Annotations.toTSType(operation);
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
              packagePath: '@groton/canvas-cli.client'
            });
          }

          let annotatedOperation: Annotations.Swagger.Operation = {
            ...operation,
            specPath,
            tsFilePath: path.join(
              outputPath,
              toOperationPath(endpoint.path, operation.parameters),
              tsName + '.ts'
            ),
            tsImports,
            tsType,
            tsEndpoint: decodeURIComponent(
              new URL(spec.basePath + endpoint.path).pathname
            ),
            tsName,
            tsPaginated
          };

          for (const parameter of operation.parameters) {
            const annotatedParameter: Annotations.Swagger.Parameter = {
              ...parameter,
              tsDeprecation: Annotations.toTSDeprecation(parameter),
              tsName: Annotations.toTSPropertyName(parameter.name),
              tsType: Annotations.toTSType(parameter)
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
              'Parameters') as keyof Annotations.Swagger.Parameters;
            if (!(paramType in annotatedOperation)) {
              annotatedOperation[paramType] = [];
            }
            if (Array.isArray(annotatedOperation[paramType])) {
              // @ts-expect-error 2345 -- array index makes typing tricky
              annotatedOperation[paramType].push(annotatedParameter);
            }
          }
          for (const transform of postTransforms) {
            annotatedOperation = await transform(annotatedOperation);
          }
          operations[annotatedOperation.tsFilePath] = annotatedOperation;
        }
      }
    }
  }
  return { ...annotation, operations };
}

function toOperationPath(
  endpointPath: Swagger.v1p2.ApiObject['path'],
  parameters: Swagger.v1p2.OperationObject['parameters']
): PathString {
  return parameters
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
