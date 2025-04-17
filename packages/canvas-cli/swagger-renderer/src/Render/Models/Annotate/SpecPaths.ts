import { PathString } from '@battis/descriptive-types';
import { Annotation } from '../Annotation.js';
import {
  annotateJSONFile,
  Options as AnnotateJSONFileOptions
} from './JSON.js';

export type Options = Omit<AnnotateJSONFileOptions, 'specPath'> & {
  specPaths: PathString[];
};

export async function annotateSpecPaths({
  specPaths,
  ...options
}: Options): Promise<Annotation> {
  const annotation: Annotation = { spec: {}, models: {} };
  for (const specPath of specPaths) {
    const annotatedSpec = await annotateJSONFile({
      specPath,
      ...options
    });
    annotation.spec = { ...annotation.spec, ...annotatedSpec.spec };
    annotation.models = { ...annotation.models, ...annotatedSpec.models };
  }
  return annotation;
}
