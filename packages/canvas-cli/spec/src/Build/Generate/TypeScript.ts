import { PathString } from '@battis/descriptive-types';
import * as Swagger from '@groton/swagger-spec-ts';
import path from 'node:path';
import {
  AnnotatedModel,
  TSDeprecation,
  TSExport,
  TSName,
  TSType
} from './Annotation.js';

export function toTSDeprecation(obj: object): TSDeprecation {
  if ('deprecated' in obj && obj.deprecated) {
    return `@deprecated ${'deprecation_description' in obj ? obj.deprecation_description : ''}`;
  }
  return undefined;
}

export function toTSExport(_: AnnotatedModel): TSExport {
  return 'export';
}

export function toTSPropertyName(id: string): TSName {
  if (/^[a-z_$][a-z_$0-9]*$/i.test(id)) {
    return id;
  }
  return `"${id}"`;
}

export function toTSTypeName(id: string): TSName {
  return id.replace(/[^a-z0-9_]+/gi, '');
}

export function toTSNamespace(filePath: PathString): TSName {
  return path.basename(filePath, '.js').replace(/[^a-z0-9_]+/gi, '_');
}

export function toTSType(property: Swagger.v1p2.DataType): TSType {
  if (Swagger.v1p2.isRefType(property)) {
    return {
      type: toTSTypeName(property.$ref),
      tsReference: { type: toTSTypeName(property.$ref) }
    };
  }
  const tsType: TSType = { type: 'unknown' };
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
    // non-standard type used in some Canvas specs
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
  if ('format' in property) {
    tsType.description = `format: ${property.format}`;
  }
  return tsType;
}
