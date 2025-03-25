import { DateTimeString } from '@battis/descriptive-types';
import { PotentialAnnotation } from './Annotation.js';
import * as Snapshot from './Snapshot.js';

export type Item<T = PotentialAnnotation, D = DateTimeString> = Snapshot.Data<
  T,
  D
>;
export type Data<T = PotentialAnnotation, D = DateTimeString> = Item<T, D>[];
