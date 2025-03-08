import { DateTimeString, PathString } from '@battis/descriptive-types';

export type Annotated = {
  original: PathString;
  accessed: DateTimeString;
  localPath: PathString;
  filename: string;
};
