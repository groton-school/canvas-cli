import { client } from '../../../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  section_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get rubric assessments read state
 *
 * Return whether new rubric comments/grading made on a submission have been
 * seen by the student being assessed.
 *
 * Nickname: get_rubric_assessments_read_state_sections_rubric_assessments
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read`,
    {
      method: 'GET',
      ...options
    }
  );
}
