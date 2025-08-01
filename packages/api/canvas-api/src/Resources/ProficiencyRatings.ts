export type ProficiencyRating = {
  /** The description of the rating */
  description: string;
  /**
   * A non-negative number of points for the rating
   *
   * Type: number
   */
  points: number | string;
  /**
   * Indicates the rating where mastery is first achieved
   *
   * Type: boolean
   */
  mastery: boolean | string;
  /** The hex color code of the rating */
  color: string;
};

export type Proficiency = {
  /**
   * An array of proficiency ratings. See the ProficiencyRating specification
   * above.
   */
  ratings: unknown;
};
