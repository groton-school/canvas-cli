import { JSONValue } from '@battis/typescript-tricks';

export type CustomColumn = {
  /**
   * The ID of the custom gradebook column
   *
   * Type: integer
   */
  id: number | string;
  /**
   * When true, this column's visibility will be toggled in the Gradebook when a
   * user selects to show or hide notes
   *
   * Type: boolean
   */
  teacher_notes: boolean | string;
  /** Header text */
  title: string;
  /**
   * Column order
   *
   * Type: integer
   */
  position: number | string;
  /**
   * Won't be displayed if hidden is true
   *
   * Type: boolean
   */
  hidden: boolean | string;
  /**
   * Won't be editable in the gradebook UI
   *
   * Type: boolean
   */
  read_only: boolean | string;
};

/** ColumnDatum objects contain the entry for a column for each user. */
export type ColumnDatum = {
  content: string;
  /** Type: integer */
  user_id: number | string;
};
