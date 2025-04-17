import Handlebars from 'handlebars';
import fs from 'node:fs';
import path from 'node:path';
import * as Annotations from '../../Annotations/index.js';
import { importPath } from '../../importPath.js';
import { writePrettier } from '../../writePrettier.js';
import { Options } from './Models.js';

export async function renderModelIndex({
  templatePath,
  outputPath,
  models
}: Options) {
  const template = Handlebars.compile(
    fs.readFileSync(path.join(templatePath, 'ModelIndex.handlebars')).toString()
  );
  await writePrettier(
    path.join(outputPath, 'index.ts'),
    template({
      index: Object.keys(models)
        .filter((filePath) => models[filePath].length)
        .map((filePath) => ({
          tsNamespace: Annotations.toTSNamespace(filePath),
          filePath: importPath(path.join(outputPath, 'index.ts'), filePath)
        }))
    })
  );
}
