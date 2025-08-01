import { JSONObject } from '@battis/typescript-tricks';

export type Bookmark = {
  /** Type: integer */
  id: number | string;
  name: string;
  url: string;
  /** Type: integer */
  position: number | string;
  /** Object */
  data: JSONObject;
};
