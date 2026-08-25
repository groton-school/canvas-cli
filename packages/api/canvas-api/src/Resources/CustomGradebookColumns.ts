import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type CustomColumn = {
  /**
   * The ID of the custom gradebook column
   *
   * type: integer
   */
  id: number | string;
  /**
   * When true, this column's visibility will be toggled in the Gradebook when a user selects to show or hide notes
   *
   * type: boolean
   */
  teacher_notes: boolean | string;
  /**
   * header text
   *
   *
   */
  title: string;
  /**
   * column order
   *
   * type: integer
   */
  position: number | string;
  /**
   * won't be displayed if hidden is true
   *
   * type: boolean
   */
  hidden: boolean | string;
  /**
   * won't be editable in the gradebook UI
   *
   * type: boolean
   */
  read_only: boolean | string;
};

/**
 * ColumnDatum objects contain the entry for a column for each user.
 */
export type ColumnDatum = {
  /**
   *
   *
   *
   */
  content: string;
  /**
   *
   *
   * type: integer
   */
  user_id: number | string;
};
