import * as Archive from '@msar/types.archive';
import * as Annotation from './Annotation.js';

export type Item<T = Annotation.PotentialAnnotation> = Omit<
  Archive.Assignments.Item<T>,
  'Rubric'
> & {
  canvas?: Annotation.CanvasData;
  Rubric?: NonNullable<Archive.Assignments.Item<T>['Rubric']> & {
    canvas?: Annotation.CanvasData;
  };
};
export type Data<T = Annotation.PotentialAnnotation> = Item<T>[];
