import * as Archive from '@msar/types.archive';
import { CanvasData, PotentialAnnotation } from './Annotation.js';

export type Item<T = PotentialAnnotation> = Archive.Topics.Item<T>;

export type Topic<T = PotentialAnnotation> = Archive.Topics.Topic<T> & {
  canvas?: CanvasData;
};

export type Data<T = PotentialAnnotation> = Topic<T>[];
