import { PathString } from '@battis/descriptive-types';
import * as Annotations from '../Annotations/index.js';
import * as Models from '../Models/index.js';

export type Annotation = Models.Annotation & {
  operations: Record<PathString, Annotations.Swagger.Operation>;
};
