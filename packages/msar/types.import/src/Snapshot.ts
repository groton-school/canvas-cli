import { DateTimeString } from '@battis/descriptive-types';
import * as Archive from '@msar/types.archive';
import { CanvasData, PotentialAnnotation } from './Annotation.js';
import * as Assignments from './Assignments.js';
import * as SectionInfo from './SectionInfo.js';
import * as Topics from './Topics.js';

export type Data<T = PotentialAnnotation, D = DateTimeString> = Omit<
  Archive.Data<T, D>,
  'SectionInfo' | 'Topics' | 'Assignments'
> & {
  SectionInfo?: SectionInfo.Data;
  assignment_groups?: CanvasData[];
  Assignments?: Assignments.Data<T>;
  Topics?: Topics.Data<T>;
  front_page?: CanvasData;
};
