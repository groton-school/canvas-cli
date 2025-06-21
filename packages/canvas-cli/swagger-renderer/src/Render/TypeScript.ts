import { PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import * as Swagger from '@groton/swagger-spec-ts';
import path from 'node:path';
import { AnnotatedModel } from './Annotation.js';
import * as Overrides from './Overrides.js';
import { TSDeprecation, TSExport, TSName, TSType } from './TSAnnotation.js';

export function toTSDeprecation(obj: object): TSDeprecation {
  if ('deprecated' in obj && obj.deprecated) {
    return `@deprecated ${'deprecation_description' in obj ? obj.deprecation_description : ''}`;
  }
  return undefined;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  let tsNamespace = path
    .basename(filePath, '.ts')
    .replace(/[^a-z0-9_]+/gi, '_')
    .split('_')
    .map((token) =>
      token.length ? token[0].toUpperCase() + token.slice(1) : ''
    )
    .join('');
  if (tsNamespace === 'V1') {
    tsNamespace = tsNamespace.toLowerCase();
  }
  return tsNamespace;
}

export function toTSType(property: Swagger.v1p2.DataType): TSType {
  if (Swagger.v1p2.isRefType(property)) {
    return {
      type: toTSTypeName(property.$ref),
      tsReferences: [{ type: toTSTypeName(property.$ref) }]
    };
  }
  let tsType = Overrides.tsType(property.type);
  if (!tsType) {
    tsType = { type: 'unknown' };
    switch (property.type) {
      case 'boolean':
      case 'number':
        tsType.description = `type: ${property.type}`;
        tsType.type = `${property.type} | string`;
        break;
      case 'void':
      case 'string':
        tsType.type = property.type;
        break;
      case 'integer':
        tsType.type = 'number | string';
        tsType.description = `type: ${property.type}`;
        break;
      case 'array':
        if ('items' in property) {
          if ('$ref' in property.items && property.items.$ref === 'Array') {
            tsType.type = 'string[]';
            Log.debug(
              `Interpretting an array with ${Colors.value('items.$ref')}: ${Colors.quotedValue(`"Array"`)} as ${Colors.value(tsType.type)}`
            );
            break;
          } else {
            const itemType = toTSType(property.items);
            tsType.type = `${itemType.type}[]`;
            tsType.tsReferences = itemType.tsReferences;
          }
        }
        break;
      default:
        Log.debug(
          `Interpretting ${Colors.value('type')}: ${Colors.quotedValue(`"${property.type}"`)} as  ${Colors.value('RefType')}`
        );
        return toTSType({ $ref: property.type });
    }
  }
  if ('format' in property && property.format != null) {
    tsType.description = `format: '${property.format}'`;
  }
  return tsType;
}
