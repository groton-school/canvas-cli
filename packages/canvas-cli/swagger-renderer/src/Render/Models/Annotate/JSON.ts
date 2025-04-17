import { PathString } from '@battis/descriptive-types';
import * as Swagger from '@groton/swagger-spec-ts';
import fs from 'node:fs';
import path from 'node:path';
import { Annotation } from '../Annotation.js';
import {
  Options as AnnotatedModelsOptions,
  annotateModels
} from './ModelObjects.js';

export type Options = Omit<AnnotatedModelsOptions, 'api'> & {
  outputPath: PathString;
};

export async function annotateJSONFile({
  specPath,
  outputPath,
  ...options
}: Options): Promise<Annotation> {
  const spec = JSON.parse(
    fs.readFileSync(specPath).toString()
  ) as Swagger.v1p2.ApiDeclaration;
  return {
    spec: { [specPath]: [spec] },
    models: {
      [toFilePath(outputPath, specPath)]: await annotateModels({
        api: spec,
        specPath,
        ...options
      })
    }
  };
}

function toFilePath(outputPath: string, specPath: PathString): PathString {
  return path.join(
    outputPath,
    path
      .basename(specPath, '.json')
      .split('_')
      .map((token) => token[0].toUpperCase() + token.slice(1))
      .join('') + '.ts'
  );
}
