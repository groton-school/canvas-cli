export type CustomColumn = {
  /**
   * The ID of the custom gradebook column
   *
   * Type: integer
   */
  id: number;
  /**
   * When true, this column's visibility will be toggled in the Gradebook when a
   * user selects to show or hide notes
   */
  teacher_notes: boolean;
  /** Header text */
  title: string;
  /**
   * Column order
   *
   * Type: integer
   */
  position: number;
  /** Won't be displayed if hidden is true */
  hidden: boolean;
  /** Won't be editable in the gradebook UI */
  read_only: boolean;
};

/** ColumnDatum objects contain the entry for a column for each user. */
export type ColumnDatum = {
  /** ColumnDatum objects contain the entry for a column for each user. */
  content: string;
  /**
   * ColumnDatum objects contain the entry for a column for each user.
   *
   * Type: integer
   */
  user_id: number;
};
