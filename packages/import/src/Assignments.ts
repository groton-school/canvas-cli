import * as Archive from '@msar/types.archive';
import * as Annotation from './Annotation.js';

export type Item<T = Annotation.PotentialAnnotation> =
  Archive.Assignments.Item<T> & { canvas?: Annotation.CanvasData };
export type Data<T = Annotation.PotentialAnnotation> = Item<T>[];
