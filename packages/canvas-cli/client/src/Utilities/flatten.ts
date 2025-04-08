export function flatten(
  value: unknown,
  key?: string,
  result: Record<string, string> = {},
  numeric_indices = false
): Record<string, string> {
  if (value && typeof value === 'object') {
    if (Array.isArray(value)) {
      value.forEach(
        (elt, i) =>
          (result = flatten(
            elt,
            `${key}[${numeric_indices ? i : ''}]`,
            result,
            numeric_indices
          ))
      );
    } else {
      for (const prop in value) {
        result = flatten(
          (value as Record<string, unknown>)[prop],
          key ? `${key}[${prop}]` : prop,
          result,
          numeric_indices
        );
      }
    }
  } else if (key) {
    result[key] = typeof value === 'string' ? value : JSON.stringify(value);
  } else {
    throw new Error(`key undefined`);
  }
  return result;
}
