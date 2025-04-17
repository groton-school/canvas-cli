import { Annotation } from '../Annotation.js';

export function annotateImports(annotation: Annotation) {
  for (const filePath in annotation.models) {
    for (const model of annotation.models[filePath]) {
      for (const tsImport of model.tsImports || []) {
        tsImport.filePath = Object.keys(annotation.models).find((filePath) =>
          annotation.models[filePath]
            .map((model) => model.tsName)
            .includes(tsImport.type)
        );
      }
    }
  }
}
