import { PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import * as SwaggerSpec from '@groton/swagger-spec-ts';
import path from 'node:path';
import * as Overrides from '../Overrides.js';
import * as Swagger from './Swagger.js';
import * as TypeScript from './TypeScript.js';

export function toTSDeprecation(obj: object): TypeScript.Deprecation {
  if ('deprecated' in obj && obj.deprecated) {
    return `@deprecated ${'deprecation_description' in obj ? obj.deprecation_description : ''}`;
  }
  return undefined;
}

export function toTSExport(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: Swagger.Model
): TypeScript.Export {
  return 'export';
}

export function toTSPropertyName(id: string): TypeScript.Name {
  if (/^[a-z_$][a-z_$0-9]*$/i.test(id)) {
    return id;
  }
  return `"${id}"`;
}

export function toTSTypeName(id: string): TypeScript.Name {
  return id.replace(/[^a-z0-9_]+/gi, '');
}

export function toTSMethodName(
  operation: SwaggerSpec.v1p2.OperationObject
): TypeScript.Name {
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

export function toTSNamespace(filePath: PathString): TypeScript.Name {
  return path
    .basename(filePath, '.ts')
    .replace(/[^a-z0-9_]+/gi, '_')
    .split('_')
    .map((token) =>
      token.length ? token[0].toUpperCase() + token.slice(1) : ''
    )
    .join('');
}

export function toTSType(property: SwaggerSpec.v1p2.DataType): TypeScript.Type {
  if (SwaggerSpec.v1p2.isRefType(property)) {
    return {
      type: toTSTypeName(property.$ref),
      tsReferences: [{ type: toTSTypeName(property.$ref) }]
    };
  }
  let tsType = Overrides.tsType(property.type);
  if (!tsType) {
    tsType = { type: 'unknown' };
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
