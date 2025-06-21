export type QuizSubmissionQuestion = {
  /**
   * The ID of the QuizQuestion this answer is for.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /**
   * Whether this question is flagged.
   *
   * Type: boolean
   */
  flagged: boolean | string;
  /**
   * The provided answer (if any) for this question. The format of this
   * parameter depends on the type of the question, see the Appendix for more
   * information.
   */
  answer: string;
  /**
   * The possible answers for this question when those possible answers are
   * necessary. The presence of this parameter is dependent on permissions.
   */
  answers: string[];
};
