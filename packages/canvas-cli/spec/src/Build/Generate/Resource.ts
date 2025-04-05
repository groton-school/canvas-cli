import * as Swagger from '@groton/swagger-spec-ts';
import {
  AnnotatedModel,
  AnnotatedProperty,
  TSDeprecation,
  TSExport,
  TSName,
  TSType
} from './Annotation.js';

export function annotate(api: Swagger.v1p2.ApiDeclaration): AnnotatedModel[] {
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

function toTSDeprecation(obj: object): TSDeprecation {
  if ('deprecated' in obj && obj.deprecated) {
    return `@deprecated ${'deprecation_description' in obj ? obj.deprecation_description : ''}`;
  }
  return undefined;
}

function toTSExport(_: AnnotatedModel): TSExport {
  return 'export';
}

function toTSPropertyName(id: string): TSName {
  if (/^[a-z_$][a-z_$0-9]*$/i.test(id)) {
    return id;
  }
  return `"${id}"`;
}

function toTSTypeName(id: string): TSName {
  return id.replace(/[^a-z0-9_]+/gi, '');
}

function toTSType(property: Swagger.v1p2.DataType): TSType {
  if ('$ref' in property) {
    return {
      type: toTSTypeName(property.$ref),
      tsReference: { type: toTSTypeName(property.$ref) }
    };
  }
  const tsType: TSType = { type: 'unknown' };
  if ('type' in property) {
    switch (property.type) {
      case 'void':
      case 'boolean':
      case 'number':
      case 'string':
        tsType.type = property.type;
        break;
      case 'integer':
        tsType.type = 'number';
        tsType.description = `type: ${property.type}`;
        break;
      case 'datetime':
        tsType.type = 'string';
        tsType.description = `format: 'date-time'`;
        break;
      case 'array':
        if ('items' in property) {
          const itemType = toTSType(property.items);
          tsType.type = `${itemType.type}[]`;
          tsType.tsReference = itemType.tsReference;
        }
    }
  }
  if ('format' in property) {
    tsType.description = `format: ${property.format}`;
  }
  return tsType;
}
