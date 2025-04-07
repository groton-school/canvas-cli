import { PathString } from '@battis/descriptive-types';
import * as Swagger from '@groton/swagger-spec-ts';

export type AnnotatedApiObject = Swagger.v1p2.ApiObject & {
  operations: AnnotatedOperation[];
};

export type AnnotatedOperation = Swagger.v1p2.OperationObject & {
  specPath: PathString;
  tsFilePath: PathString;
  tsImports?: TSReference[];
  tsEndpoint?: PathString;
  tsName: TSName;
  tsType: TSType;
  tsPathParameters?: (AnnotatedParameter & { paramType: 'path' })[];
  tsQueryParameters?: (AnnotatedParameter & { paramType: 'query' })[];
  tsBodyParameters?: (AnnotatedParameter & { paramType: 'body' })[];
  tsFormParameters?: (AnnotatedParameter & { paramType: 'form' })[];
};

export type AnnotatedParameter = Swagger.v1p2.ParameterObject & {
  tsDeprecation?: TSDeprecation;
  tsName: TSName;
  tsType: TSType;
};

export type AnnotatedModel = Omit<Swagger.v1p2.ModelsObject, 'properties'> & {
  specPath: PathString;
  tsImports?: TSReference[];
  tsDeprecation?: TSDeprecation;
  tsExport?: TSExport;
  tsName: TSName;
  properties: AnnotatedProperty[];
};

export type AnnotatedProperty = Swagger.v1p2.DataTypeBase & {
  tsDeprecation?: TSDeprecation;
  tsName: TSName;
  tsType: TSType;
};

export type TSDeprecation = string | undefined;

export type TSExport = 'export' | '' | undefined;

export type TSName = string;

export type TSType = {
  type: string;
  tsReference?: TSReference;
  optional?: '?';
  description?: string;
};

export type TSReference = {
  type: string;
} & (
  | { filePath?: PathString; packagePath?: never }
  | { packagePath: string; filePath?: never }
);
