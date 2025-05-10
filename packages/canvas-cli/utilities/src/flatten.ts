export function flatten(
  value: unknown,
  key?: string,
  result: string[] = [],
  numeric_indices = false
): string {
  if (value && typeof value === 'object') {
    if (Array.isArray(value)) {
      value.forEach((elt, i) =>
        result.push(
          flatten(
            elt,
            `${key}[${numeric_indices ? i : ''}]`,
            result,
            numeric_indices
          )
        )
      );
    } else {
      for (const prop in value) {
        result.push(
          flatten(
            (value as Record<string, unknown>)[prop],
            key ? `${key}[${prop}]` : prop,
            result,
            numeric_indices
          )
        );
      }
    }
  } else if (key) {
    result.push(
      `${key}=${
        typeof value === 'string'
          ? value
          : encodeURIComponent(JSON.stringify(value))
      }`
    );
  } else {
    throw new Error(`key undefined`);
  }
  return result.join('&');
}
