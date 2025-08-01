export type Favorite = {
  /**
   * The ID of the object the Favorite refers to
   *
   * Type: integer
   */
  context_id: number | string;
  /**
   * The type of the object the Favorite refers to (currently, only 'Course' is
   * supported)
   */
  context_type: string;
};
