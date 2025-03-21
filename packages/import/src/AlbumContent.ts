import * as Archive from '@msar/types.archive';
import { CanvasData, PotentialAnnotation } from './Annotation.js';

export type Item<T = PotentialAnnotation> = Archive.AlbumContent.Item<T> & {
  canvas?: CanvasData;
};
export type Data<T = PotentialAnnotation> = Item<T>[];
