import { PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
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
    case 'Positive Integer':
    case 'Integer':
      debugInterpretation(property.type, 'number');
    // eslint-disable-next-line no-fallthrough
    case 'integer':
      tsType.type = 'number';
      tsType.description = `type: ${property.type}`;
      break;
    case '[Integer]':
      tsType.type = 'number[]';
      tsType.description = `format: 'integer'`;
      debugInterpretation(property.type, tsType.type);
      break;
    case 'DateTime':
    case 'datetime':
      tsType.type = 'string';
      tsType.description = `format: 'date-time'`;
      debugInterpretation(property.type, tsType.type);
      break;
    case 'Date':
      tsType.type = 'string';
      tsType.description = `format: 'date'`;
      debugInterpretation(property.type, tsType.type);
      break;
    case 'object':
    case 'Object':
      tsType.type = 'object';
      debugInterpretation(property.type, tsType.type);
      break;
    case 'URL':
      tsType.type = 'string';
      tsType.description = `format: 'url'`;
      debugInterpretation(property.type, tsType.type);
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
          tsType.tsReference = itemType.tsReference;
        }
      }
    // eslint-disable-next-line no-fallthrough
    case 'Array':
    case 'String[]':
      tsType.type = 'string[]';
      debugInterpretation(property.type, tsType.type);
      break;
    case 'Hash':
      tsType.type = 'Record<string,JSONValue>';
      tsType.tsReference = {
        type: 'JSONValue',
        packagePath: '@battis/typescript-tricks'
      };
      debugInterpretation(property.type, tsType.type);
      break;
    case 'json':
      tsType.type = 'JSONObject';
      tsType.tsReference = {
        type: 'JSONObject',
        packagePath: '@battis/typescript-tricks'
      };
      debugInterpretation(property.type, tsType.type);
      break;
    case '{ "count": "integer" }':
      tsType.type = '{ count: number }';
      debugInterpretation(property.type, tsType.type);
      break;
    case '{success: true}':
      tsType.type = property.type;
      debugInterpretation(property.type, tsType.type);
      break;
    case 'list of content items':
      tsType.type =
        '{type: string, property: string, title?: string, count?: number, sub_items_url?: string}[]';
      debugInterpretation(property.type, tsType.type);
      break;
    case 'array of outcome ids':
      tsType.type = 'string[]';
      debugInterpretation(property.type, tsType.type);
      break;
    case 'a CSV file in the format that can be imported':
      tsType.type = 'string';
      debugInterpretation(property.type, tsType.type);
      break;
    case 'RubricImport':
      tsType.type = 'unknown';
      debugInterpretation(property.type, tsType.type);
      break;
    default:
      Log.debug(
        `Interpretting ${Colors.value('type')}: ${Colors.quotedValue(`"${property.type}"`)} as  ${Colors.value('RefType')}`
      );
      return toTSType({ $ref: property.type });
  }
  if ('format' in property && property.format != null) {
    tsType.description = `format: '${property.format}'`;
  }
  return tsType;
}

function debugInterpretation(propType: string, tsType: string) {
  Log.debug(
    `Interpretting ${Colors.value('type')}: ${Colors.quotedValue(`"${propType}"`)} as ${Colors.value(tsType)}`
  );
}
