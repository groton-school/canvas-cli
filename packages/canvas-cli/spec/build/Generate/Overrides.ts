import { AnnotatedModel, TSReference } from './Annotation.js';

export type Overrides = {
  tsReferences?: TSReference[];
  annotatedModels?: (Partial<AnnotatedModel> & { name: string })[];
};
