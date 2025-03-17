import { DateTimeString } from '@battis/descriptive-types';
import { JSONObject } from '@battis/typescript-tricks';
import * as Archive from '@msar/types.archive';

type Data = {
  id?: number;
  args: JSONObject;
  created_at?: DateTimeString;
  modified_at?: DateTimeString;
};

export type Annotation = Archive.Annotation & { canvas: Data };

export function isAnnotated(obj: JSONObject): obj is Annotation {
  return Archive.isAnnotated(obj) && 'canvas' in obj;
}
