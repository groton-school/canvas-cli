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
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a question group
 *
 * Update a question group
 *
 * Nickname: update_question_group
 */
export async function update({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
