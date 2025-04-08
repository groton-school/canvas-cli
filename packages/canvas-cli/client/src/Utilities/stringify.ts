import { flatten } from './flatten.js';

export function stringify(
  obj: Record<string, unknown>
): Record<string, string> {
  return flatten(obj);
}
