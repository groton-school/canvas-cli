import * as Archive from '@msar/types.archive';
import { CanvasData } from './Annotation.js';

export type Data = Archive.SectionInfo.Data & {
  canvas?: CanvasData;
};
