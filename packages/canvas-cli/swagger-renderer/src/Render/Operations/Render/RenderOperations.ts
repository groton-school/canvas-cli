import { PathString } from '@battis/descriptive-types';
import Handlebars from 'handlebars';
import fs from 'node:fs';
import path from 'node:path';
import { importPath } from '../../importPath.js';
import { writePrettier } from '../../writePrettier.js';
import { Annotation } from '../Annotation.js';

export type Options = {
  operations: Annotation['operations'];
  templatePath: PathString;
};

export async function renderOperations({ operations, templatePath }: Options) {
  const template = Handlebars.compile(
    fs.readFileSync(path.join(templatePath, 'Operation.handlebars')).toString()
  );
  for (const filePath in operations) {
    await writePrettier(
      filePath,
      template({
        ...operations[filePath],
        tsImports: operations[filePath].tsImports?.map((tsImport) => {
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
