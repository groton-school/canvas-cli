import { PathString } from '@battis/descriptive-types';
import Handlebars from 'handlebars';
import fs from 'node:fs';
import path from 'node:path';
import * as Annotations from '../../Annotations/index.js';
import { importPath } from '../../importPath.js';
import { writePrettier } from '../../writePrettier.js';
import { Annotation } from '../Annotation.js';

export type Options = {
  templatePath: PathString;
  outputPath: PathString;
  models: Annotation['models'];
};

export async function renderModels({
  templatePath,
  outputPath,
  models
}: Options) {
  const template = Handlebars.compile(
    fs.readFileSync(path.join(templatePath, 'Model.handlebars')).toString()
  );
  fs.mkdirSync(outputPath, { recursive: true });
  for (const filePath in models) {
    if (models[filePath].length) {
      await writePrettier(
        filePath,
        template({
          models: models[filePath],
          tsImports: models[filePath]
            .reduce((tsImports, model) => {
              for (const tsImport of model.tsImports || []) {
                if (!tsImports.find((t) => t.type === tsImport.type)) {
                  tsImports.push(tsImport);
                }
              }
              return tsImports;
            }, [] as Annotations.TypeScript.Reference[])
            .map((tsImport) => {
              if (tsImport.filePath) {
                return {
                  ...tsImport,
                  filePath: importPath(filePath, tsImport.filePath)
                };
              }
              return tsImport;
            })
        })
      );
    }
  }
}
