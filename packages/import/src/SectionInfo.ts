import * as Archive from '@msar/types.archive';
import * as Annotation from './Annotation.js';

export type Data = Archive.SectionInfo.Data & {
  canvas?: Annotation.CanvasData;
};
