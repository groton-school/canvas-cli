export type QuizGroup = {
  /**
   * The ID of the question group.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /**
   * The ID of the Quiz the question group belongs to.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  quiz_id: number | string;
  /** The name of the question group. */
  name: string;
  /**
   * The number of questions to pick from the group to display to the student.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  pick_count: number | string;
  /**
   * The amount of points allotted to each question in the group.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  question_points: number | string;
  /**
   * The ID of the Assessment question bank to pull questions from.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  assessment_question_bank_id: number | string;
  /**
   * The order in which the question group will be retrieved and displayed.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  position: number | string;
};
