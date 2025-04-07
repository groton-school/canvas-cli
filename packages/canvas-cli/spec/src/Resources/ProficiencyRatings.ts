export type ProficiencyRating = {
  /** The description of the rating */
  description: string;
  /** A non-negative number of points for the rating */
  points: number;
  /** Indicates the rating where mastery is first achieved */
  mastery: boolean;
  /** The hex color code of the rating */
  color: string;
};

export type Proficiency = {
  /**
   * An array of proficiency ratings. See the ProficiencyRating specification
   * above.
   */
  ratings: string[];
};
