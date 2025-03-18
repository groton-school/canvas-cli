import { DateTimeString } from '@battis/descriptive-types';
import { JSONObject } from '@battis/typescript-tricks';
import * as Archive from '@msar/types.archive';

export type CanvasData = {
  id?: number;
  blackbaud_id?: number;
  args: JSONObject;
  created_at?: DateTimeString;
  modified_at?: DateTimeString;
  [key: string]: any;
};

export type Annotation = Archive.Annotation & { canvas: CanvasData };

export function isAnnotated(obj: object): obj is Annotation {
  return Archive.isAnnotated(obj) && 'canvas' in obj;
}
