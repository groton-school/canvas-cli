import { PathString } from '@battis/descriptive-types';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import path from 'node:path';
import { AnnotatedOperation, AnnotatedParameter } from './Annotation.js';
import { TSName, TSReference, TSType } from './TSAnnotation.js';

export type Collection = {
  /** Import paths for ambiguously specified types */
  tsReferences?: TSReference[];
  /** Hash of non-standard type values to TSType definitions */
  tsTypes?: Record<string, TSType>;
  /** Hash of OperationObject.nickname to partial OperationObject definitions */
  operations?: Record<string, Partial<AnnotatedOperation>>;
};

let _overrides: Collection = {};
let _outputPath: PathString | undefined = undefined;

export function setOverrides(overrides: Collection) {
  _overrides = overrides;
  for (const tsReference of _overrides.tsReferences || []) {
    if (tsReference.filePath) {
      tsReference.filePath = path.resolve(outputPath(), tsReference.filePath);
    }
  }
  for (const name in _overrides.tsTypes) {
    for (const ref of _overrides.tsTypes[name].tsReferences || []) {
      if (ref.filePath) {
        ref.filePath = path.resolve(outputPath(), ref.filePath);
      }
    }
  }
  for (const nickname in _overrides.operations) {
    for (const ref of _overrides.operations[nickname].tsType?.tsReferences ||
      []) {
      if (ref.filePath) {
        ref.filePath = path.resolve(outputPath(), ref.filePath);
      }
    }
    for (const tsImport of _overrides.operations[nickname].tsImports || []) {
      if (tsImport.filePath) {
        tsImport.filePath = path.resolve(outputPath(), tsImport.filePath);
      }
    }
    for (const paramType of [
      'tsPathParameters',
      'tsQueryParameters',
      'tsFormParameters',
      'tsBodyParameters'
    ]) {
      // @ts-expect-error 7053 not gonna deal with _that_ type
      for (const param of _overrides.operations[nickname][paramType] || []) {
        if (param.tsType.tsReference?.filePath) {
          param.tsType.tsReference.filePath = path.resolve(
            outputPath(),
            param.tsType.tsReference.filePath
          );
        }
      }
    }
  }
}

export function setOutputPath(outputPath: PathString) {
  _outputPath = outputPath;
}

function outputPath() {
  if (!_outputPath) {
    throw new Error(`Overrides outputPath accessed before being initialized`);
  }
  return _outputPath;
}

export function tsReference(type: TSName) {
  return _overrides.tsReferences?.find((ref) => ref.type === type);
}

export function tsType(type: string) {
  let result: TSType | undefined = undefined;
  if (_overrides.tsTypes && _overrides.tsTypes[type]) {
    result = { description: type, ..._overrides.tsTypes[type] };
    Log.debug(
      `Overriding ${Colors.value('type')} ${Colors.quotedValue(`"${type}"`)} as ${Colors.value(result.type)}`
    );
  }
  return result;
}

export function operation(operation: AnnotatedOperation) {
  if (_overrides.operations && _overrides.operations[operation.nickname]) {
    const override = _overrides.operations[operation.nickname];
    Log.debug(
      `Overriding operation ${Colors.value(operation.nickname)} properties ${Object.getOwnPropertyNames(
        override
      )
        .filter((p) => typeof p !== 'number')
        .map(Colors.value)
        .join(', ')}`
    );
    const result = merge(operation, _overrides.operations[operation.nickname]);
    Log.debug(result);
    for (const paramType of [
      'tsPathParameters',
      'tsQueryParameters',
      'tsFormParameters',
      'tsBodyParameters'
    ]) {
      if (paramType in result) {
        // TODO paramType typing
        // @ts-expect-error 7053
        result[paramType] = result[paramType].reduce((params, param) => {
          const i = params.findIndex(
            (p: AnnotatedParameter) => p.tsName === param.tsName
          );
          if (i >= 0) {
            params[i] = param;
          } else {
            params.push(param);
          }
          return params;
        }, []);
      }
    }
    return result;
  }
  return operation;
}

function merge<T>(a: T, b: Partial<T>): T {
  if (a !== undefined && a !== null && b !== undefined && b !== null) {
    if (Array.isArray(a)) {
      if (Array.isArray(b)) {
        return [...a, ...b] as T;
      } else {
        throw new TypeError(
          `Type mismatch, trying to merge ${typeof b} into an array.`
        );
      }
    } else if (typeof a === 'object') {
      if (typeof b === 'object') {
        const result = {} as T;
        let key: keyof typeof a & keyof typeof b;
        for (key of [
          ...Array.from(
            new Set([
              ...Object.getOwnPropertyNames(a),
              ...Object.getOwnPropertyNames(b)
            ] as (keyof typeof a & keyof typeof b)[])
          )
        ]) {
          // TODO setting previously unset property
          // @ts-expect-error 2322
          result[key] = merge(a[key], b[key]);
        }
        return result;
      } else {
        throw new TypeError(
          `Type mismatch, trying to merge ${typeof b} into an object.`
        );
      }
    } else {
      if (typeof a === typeof b) {
        return b as T;
      } else {
        throw new TypeError(
          `Type mismatch, trying to replace ${typeof a} with ${typeof b}`
        );
      }
    }
  }
  return (b || a) as T;
}
