import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { TSName, TSReference, TSType } from './Annotation.js';

export type Collection = {
  tsReferences?: TSReference[];
  tsTypes?: Record<string, TSType>;
};

let _overrides: Collection = {};

export function setOverrides(overrides: Collection) {
  _overrides = overrides;
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
