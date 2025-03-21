let base: URL | undefined = undefined;

export function setUrl(url: string | URL) {
  base = new URL(url);
}

export function url(url: string | URL) {
  return new URL(url, base);
}

export function getUrl() {
  if (!base) {
    throw new Error(`Canvas instance URL not initialized`);
  }
  return base.toString();
}
