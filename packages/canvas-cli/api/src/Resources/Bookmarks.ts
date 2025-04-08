import { JSONObject } from '@battis/typescript-tricks';

export type Bookmark = {
  /** Type: integer */
  id: number;
  name: string;
  url: string;
  /** Type: integer */
  position: number;
  /** Object */
  data: JSONObject;
};
