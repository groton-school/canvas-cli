type Parameters = {
  /** The name of the question group. */
  'quiz_groups[name]': string[];
  /**
   * The number of questions to randomly select for this group.
   *
   * Format: int64
   */
  'quiz_groups[pick_count]': string[];
  /**
   * The number of points to assign to each question in the group.
   *
   * Format: int64
   */
  'quiz_groups[question_points]': string[];
  /**
   * The id of the assessment question bank to pull questions from.
   *
   * Format: int64
   */
  'quiz_groups[assessment_question_bank_id]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a question group
 *
 * Create a new question group for this quiz
 *
 * <b>201 Created</b> response code is returned if the creation was successful.
 *
 * Nickname: create_question_group
 */
export async function create({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/quizzes/{quiz_id}/groups`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
