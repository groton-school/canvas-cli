import { DateTimeString, PathString } from '@battis/descriptive-types';
import * as Archive from '@msar/types.archive';
import { Annotation } from './Annotation.js';

export type Item<
  T = PathString | Annotation,
  D = DateTimeString
> = Archive.Multiple.Item<T, D>;
export type Data<
  T = PathString | Annotation,
  D = DateTimeString
> = Archive.Multiple.Data<T, D>;
