type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a quiz question
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_quiz_question
 */
export async function delete_quiz_question({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
