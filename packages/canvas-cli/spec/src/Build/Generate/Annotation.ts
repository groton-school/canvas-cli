import * as Swagger from '@groton/swagger-spec-ts';

export type AnnotatedApi = Omit<Swagger.v1p2.ApiDeclaration, 'models'> & {
  models: AnnotatedModel[];
};

export type AnnotatedModel = Omit<Swagger.v1p2.ModelsObject, 'properties'> & {
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

export type TSExport = 'export' | undefined;

export type TSName = string;

export type TSType = {
  type: string;
  tsReference?: TSReference;
  optional?: '?';
  description?: string;
};

export type TSReference = {
  type: string;
  filePath?: string;
};
