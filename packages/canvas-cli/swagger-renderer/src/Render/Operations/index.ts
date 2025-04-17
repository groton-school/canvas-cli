import * as Annotate from './Annotate/index.js';
import * as Render from './Render/index.js';

export type Options = Omit<Annotate.Options, 'operations'> &
  Omit<Render.Options, 'operations'>;

export async function render(options: Options) {
  const annotation = await Annotate.annotateOperations(options);
  Annotate.annotateImports(annotation);
  await Render.renderOperations({ ...options, ...annotation });
  await Render.renderOperationIndices({ ...options });
  return annotation;
}
