import { PathString } from '@battis/descriptive-types';
import * as Archive from '@msar/types.archive';
import * as Annotation from './Annotation.js';

export type Item<T = PathString | Archive.Annotation | Annotation.Annotation> =
  Archive.Assignments.Item<T> & { canvas?: Annotation.CanvasData };
export type Data<T = PathString | Archive.Annotation | Annotation.Annotation> =
  Item<T>[];
