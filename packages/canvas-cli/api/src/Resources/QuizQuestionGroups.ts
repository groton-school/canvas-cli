export type QuizGroup = {
  /**
   * The ID of the question group.
   *
   * Format: 'int64'
   */
  id: number;
  /**
   * The ID of the Quiz the question group belongs to.
   *
   * Format: 'int64'
   */
  quiz_id: number;
  /** The name of the question group. */
  name: string;
  /**
   * The number of questions to pick from the group to display to the student.
   *
   * Format: 'int64'
   */
  pick_count: number;
  /**
   * The amount of points allotted to each question in the group.
   *
   * Format: 'int64'
   */
  question_points: number;
  /**
   * The ID of the Assessment question bank to pull questions from.
   *
   * Format: 'int64'
   */
  assessment_question_bank_id: number;
  /**
   * The order in which the question group will be retrieved and displayed.
   *
   * Format: 'int64'
   */
  position: number;
};
