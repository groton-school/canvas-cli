import { PathString } from '@battis/descriptive-types';
import * as Archive from '@msar/types.archive';
import * as Annotation from './Annotation.js';

export type Item<T = PathString | Annotation.Annotation> =
  Archive.Topics.Item<T>;

export type Topic<T = PathString | Annotation.Annotation> =
  Archive.Topics.Topic<T> & { canvas?: Annotation.CanvasData };

export type Data<T = PathString | Annotation.Annotation> = Topic<T>[];
