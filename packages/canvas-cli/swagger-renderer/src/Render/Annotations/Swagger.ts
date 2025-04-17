import { PathString } from '@battis/descriptive-types';
import * as Swagger from '@groton/swagger-spec-ts';
import * as TypeScript from './TypeScript.js';

export type API = Swagger.v1p2.ApiObject & {
  operations: Operation[];
};

export type Operation = Swagger.v1p2.OperationObject & {
  specPath: PathString;
  tsFilePath: PathString;
  tsImports?: TypeScript.Reference[];
  tsEndpoint?: PathString;
  tsName: TypeScript.Name;
  tsType: TypeScript.Type;
  tsPaginated?: boolean;
} & Parameters;

export type Parameters = {
  tsPathParameters?: (Parameter & { paramType: 'path' })[];
  tsQueryParameters?: (Parameter & { paramType: 'query' })[];
  tsBodyParameters?: (Parameter & { paramType: 'body' })[];
  tsFormParameters?: (Parameter & { paramType: 'form' })[];
};

export type Parameter = Swagger.v1p2.ParameterObject & {
  tsDeprecation?: TypeScript.Deprecation;
  tsName: TypeScript.Name;
  tsType: TypeScript.Type;
};

export type Model = Omit<Swagger.v1p2.ModelsObject, 'properties'> & {
  specPath: PathString;
  tsImports?: TypeScript.Reference[];
  tsDeprecation?: TypeScript.Deprecation;
  tsExport?: TypeScript.Export;
  tsName: TypeScript.Name;
  properties: Property[];
};

export type Property = Swagger.v1p2.DataTypeBase & {
  tsDeprecation?: TypeScript.Deprecation;
  tsName: TypeScript.Name;
  tsType: TypeScript.Type;
};
