import { flatten } from './flatten.js';

export function stringify(obj: Record<string, unknown>): string {
  return flatten(obj);
}
