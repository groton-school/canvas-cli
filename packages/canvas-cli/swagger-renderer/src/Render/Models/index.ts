import * as Annotate from './Annotate/index.js';
import * as Render from './Render/index.js';

export { Annotation } from './Annotation.js';

export type Options = Annotate.Options & Omit<Render.Options, 'models'>;

export async function render(options: Options) {
  const annotations = await Annotate.annotateSpecPaths(options);
  Annotate.annotateImports(annotations);
  const outputOptions = {
    ...options,
    ...annotations
  };
  await Render.renderModels(outputOptions);
  await Render.renderModelIndex(outputOptions);
  return annotations;
}
