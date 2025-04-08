export type ProvisionalGrade = {
  /**
   * The identifier for the provisional grade
   *
   * Type: integer
   */
  provisional_grade_id: number;
  /**
   * The numeric score
   *
   * Type: integer
   */
  score: number;
  /** The grade */
  grade: string;
  /**
   * Whether the grade was applied to the most current submission (false if the
   * student resubmitted after grading)
   */
  grade_matches_current_submission: boolean;
  /**
   * When the grade was given
   *
   * Format: date-time
   */
  graded_at: string;
  /** Whether this is the 'final' provisional grade created by the moderator */
  final: boolean;
  /** A link to view this provisional grade in SpeedGrader */
  speedgrader_url: string;
};
