import * as Swagger from '@groton/swagger-spec-ts';

export type ModelTypeOverrides = Record<
  string,
  Partial<Swagger.v1p2.ModelsObject>
>;

export function OverrideModelTypes(overrides: ModelTypeOverrides) {
  return (model: Swagger.v1p2.ModelsObject) => {
    for (const prop in model.properties) {
      if (
        model.properties[prop].type &&
        model.properties[prop].type in overrides
      ) {
        model.properties[prop] = {
          ...model.properties[prop],
          ...overrides[model.properties[prop].type]
        };
      }
    }
  };
}

export type OperationTypeOverrides = Record<
  string,
  Partial<Swagger.v1p2.OperationObject>
>;

export function OverrideOperationTypes(overrides: OperationTypeOverrides) {
  return (operation: Swagger.v1p2.OperationObject) => {
    if (operation.type && operation.type in overrides) {
      operation = {
        ...operation,
        ...overrides[operation.type]
      } as Swagger.v1p2.OperationObject;
    }
    return operation;
  };
}

export type ParameterTypeOverrides = Record<
  string,
  Partial<Swagger.v1p2.ParameterObject>
>;

export function OverrideParameterTypes(overrides: ParameterTypeOverrides) {
  return (operation: Swagger.v1p2.OperationObject) => {
    for (let i = 0; i < operation.parameters?.length || 0; i++) {
      if (
        operation.parameters[i].type &&
        operation.parameters[i].type in overrides
      ) {
        operation.parameters[i] = {
          ...operation.parameters[i],
          ...overrides[operation.parameters[i].type]
        } as Swagger.v1p2.ParameterObject;
      }
    }
    return operation;
  };
}
