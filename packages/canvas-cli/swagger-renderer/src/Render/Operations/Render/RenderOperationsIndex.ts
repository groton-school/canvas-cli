import { PathString } from '@battis/descriptive-types';
import Handlebars from 'handlebars';
import fs from 'node:fs';
import path from 'node:path';
import * as Annotations from '../../Annotations/index.js';
import { importPath } from '../../importPath.js';
import { writePrettier } from '../../writePrettier.js';

export type Options = {
  templatePath: PathString;
  outputPath: PathString;
};

export async function renderOperationIndices({
  templatePath,
  outputPath
}: Options) {
  const template = Handlebars.compile(
    fs
      .readFileSync(path.join(templatePath, 'OperationIndex.handlebars'))
      .toString()
  );
  await recursiveIndex(outputPath, template);
}

async function recursiveIndex(
  outputPath: PathString,
  template: Handlebars.TemplateDelegate
) {
  const modules = await Promise.all(
    fs
      .readdirSync(outputPath)
      .filter((fileName) => !fileName.startsWith('.'))
      .map((fileName) => ({
        tsNamespace: `as ${Annotations.toTSNamespace(fileName)}`,
        filePath: path.join(outputPath, fileName)
      }))
      .map(async (module) => {
        if (fs.lstatSync(module.filePath).isDirectory()) {
          await recursiveIndex(module.filePath, template);
          module.filePath = path.join(module.filePath, 'index.ts');
        } else {
          module.tsNamespace = '';
        }
        return module;
      })
  );
  const filePath = path.join(outputPath, 'index.ts');
  await writePrettier(
    filePath,
    template({
      modules: modules.map((module) => ({
        ...module,
        filePath: importPath(filePath, module.filePath)
      }))
    })
  );
}
