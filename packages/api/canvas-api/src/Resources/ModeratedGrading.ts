export type ProvisionalGrade = {
  /**
   * The identifier for the provisional grade
   *
   * Type: integer
   */
  provisional_grade_id: number | string;
  /**
   * The numeric score
   *
   * Type: integer
   */
  score: number | string;
  /** The grade */
  grade: string;
  /**
   * Whether the grade was applied to the most current submission (false if the
   * student resubmitted after grading)
   *
   * Type: boolean
   */
  grade_matches_current_submission: boolean | string;
  /**
   * When the grade was given
   *
   * Format: date-time
   */
  graded_at: string;
  /**
   * Whether this is the 'final' provisional grade created by the moderator
   *
   * Type: boolean
   */
  final: boolean | string;
  /** A link to view this provisional grade in SpeedGrader */
  speedgrader_url: string;
};
