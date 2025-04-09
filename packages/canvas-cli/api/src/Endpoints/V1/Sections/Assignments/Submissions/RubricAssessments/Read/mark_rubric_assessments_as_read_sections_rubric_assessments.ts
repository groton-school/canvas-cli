import { client } from '../../../../../../../Client.js';

type mark_rubric_assessments_as_read_sections_rubric_assessmentsPathParameters =
  {
    /** ID */
    section_id: string;
    /** ID */
    assignment_id: string;
    /** ID */
    user_id: string;
  };

type Options = {
  pathParams: mark_rubric_assessments_as_read_sections_rubric_assessmentsPathParameters;
};

/**
 * Mark rubric assessments as read
 *
 * Indicate that rubric comments/grading made on a submission have been read by
 * the student being assessed. Only the student who owns the submission can use
 * this endpoint.
 *
 * NOTE: Rubric assessments will be marked as read automatically when they are
 * viewed in Canvas web.
 *
 * Nickname: mark_rubric_assessments_as_read_sections_rubric_assessments
 */
export async function mark_rubric_assessments_as_read_sections_rubric_assessments({
  pathParams
}: Options) {
  return await client().fetchAs<void>(
    `/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
