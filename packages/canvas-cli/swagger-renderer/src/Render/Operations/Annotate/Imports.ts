import * as Annotations from '../../Annotations/index.js';
import { Annotation } from '../Annotation.js';

export type Options = {
  operations: Annotation['operations'];
  models: Annotation['models'];
};

export function annotateImports({ operations, models }: Options) {
  for (const filePath in operations) {
    operations[filePath].tsImports = operations[filePath].tsImports?.reduce(
      (tsImports, tsReference) => {
        const match = tsImports.find((t) => t.type === tsReference.type);
        if (!match) {
          tsImports.push(tsReference);
        } else {
          if (
            (match.filePath && match.filePath !== tsReference.filePath) ||
            (match.packagePath && match.packagePath !== tsReference.packagePath)
          ) {
            throw new TypeError(
              `Importing two identically named objects from different files.`
            );
          }
        }
        return tsImports;
      },
      [] as Annotations.TypeScript.Reference[]
    );
    for (const tsImport of operations[filePath].tsImports || []) {
      tsImport.filePath =
        tsImport.filePath ||
        // look first for definitions local to the same spec file
        Object.keys(models).find((filePath) =>
          models[filePath].find(
            (model) =>
              model.specPath === operations[filePath]?.specPath &&
              model.tsName == tsImport.type
          )
        ) ||
        // find what's available
        Object.keys(models).find((filePath) =>
          models[filePath].map((model) => model.tsName).includes(tsImport.type)
        );
    }
  }
}
