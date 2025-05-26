export function flatten(
  value: unknown,
  key?: string,
  result: string[] = [],
  numeric_indices = false
): string {
  if (value && typeof value === 'object') {
    if (Array.isArray(value)) {
      value.forEach((elt, i) =>
        flatten(
          elt,
          `${key}[${numeric_indices ? i : ''}]`,
          result,
          numeric_indices
        )
      );
    } else {
      for (const prop in value) {
        flatten(
          (value as Record<string, unknown>)[prop],
          key ? `${key}[${prop}]` : prop,
          result,
          numeric_indices
        );
      }
    }
  } else if (key) {
    result.push(
      `${key}=${encodeURIComponent(
        typeof value === 'string' ? value : JSON.stringify(value)
      )}`
    );
  } else {
    throw new Error(`key undefined`);
  }
  return result.join('&');
}
