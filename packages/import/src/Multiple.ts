import { DateTimeString, PathString } from '@battis/descriptive-types';
import { Annotation } from './Annotation.js';
import * as Snapshot from './Snapshot.js';

export type Item<
  T = PathString | Annotation,
  D = DateTimeString
> = Snapshot.Data<T, D>;
export type Data<T = PathString | Annotation, D = DateTimeString> = Item<
  T,
  D
>[];
