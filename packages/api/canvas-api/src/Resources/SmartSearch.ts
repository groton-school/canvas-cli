import { JSONValue } from '@battis/typescript-tricks';

/** Reference to an object that matches a smart search */
export type SearchResult = {
  /**
   * The ID of the matching object.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  content_id: number | string;
  /** The type of the matching object. */
  content_type: string;
  /** The title of the matching object. */
  title: string;
  /** The body of the matching object. */
  body: string;
  /** The Canvas URL of the matching object. */
  html_url: string;
  /**
   * The distance between the search query and the result. Smaller numbers
   * indicate closer matches.
   *
   * Type: number
   */
  distance: number | string;
};
