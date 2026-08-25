import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type Bookmark = {
  /**
   *
   *
   * type: integer
   */
  id: number | string;
  /**
   *
   *
   *
   */
  name: string;
  /**
   *
   *
   *
   */
  url: string;
  /**
   *
   *
   * type: integer
   */
  position: number | string;
  /**
   *
   *
   * object
   */
  data: JSONObject;
};
