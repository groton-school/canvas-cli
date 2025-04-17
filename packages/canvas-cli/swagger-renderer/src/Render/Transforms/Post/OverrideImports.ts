import * as Annotations from '../../Annotations/index.js';
import { Transform } from '../index.js';

export type ImportOverrides = Annotations.TypeScript.Reference[];

type Importer = { tsImports?: Annotations.TypeScript.Reference[] };

export function OverrideImports<T extends Importer>(
  overrides: ImportOverrides
): Transform<T> {
  return (importer: T) => {
    for (const tsImport of importer.tsImports || []) {
      const override = overrides.find((o) => o.type === tsImport.type);
      if (override) {
        tsImport.filePath = override.filePath;
        tsImport.packagePath = override.packagePath;
      }
    }
    return importer;
  };
}
