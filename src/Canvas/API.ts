export function stringify(obj: Record<string, any>) {
  const stringified: Record<string, string> = {};
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      for (const i in obj[key]) {
        stringified[`${key}[${i}]`] = obj[key][i].toString();
      }
    } else {
      stringified[key] = obj[key].toString();
    }
  }
  return stringified;
}
