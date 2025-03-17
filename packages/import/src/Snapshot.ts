import { DateTimeString, PathString } from '@battis/descriptive-types';
import * as Archive from '@msar/types.archive';
import { Annotation } from './Annotation.js';

export type Data<
  T = PathString | Annotation,
  D = DateTimeString
> = Archive.Data<T, D>;
