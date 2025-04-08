import { client } from '../../../../../../../Client.js';

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
 * Nickname: get_rubric_assessments_read_state_sections_rubric_assessments
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read`,
    { method: 'GET', params: parameters }
  );
}
