export function isError(obj: unknown) {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    ('error' in obj || 'errors' in obj)
  );
}
