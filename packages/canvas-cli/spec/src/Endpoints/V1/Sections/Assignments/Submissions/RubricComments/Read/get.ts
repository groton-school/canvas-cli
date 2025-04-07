type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get rubric assessments read state
 *
 * Return whether new rubric comments/grading made on a submission have been
 * seen by the student being assessed.
 *
 * Nickname: get_rubric_assessments_read_state_sections_rubric_comments
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
