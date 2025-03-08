let snapshotPath: string;

export function setPath(value?: string) {
  if (value) {
    snapshotPath = value;
  }
}

export function path() {
  return snapshotPath;
}
