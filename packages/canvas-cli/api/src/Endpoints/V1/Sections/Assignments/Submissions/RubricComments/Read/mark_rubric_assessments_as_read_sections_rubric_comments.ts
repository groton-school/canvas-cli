import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../../Client.js';

export type mark_rubric_assessments_as_read_sections_rubric_commentsPathParameters =
  {
    /** ID */
    section_id: string;
    /** ID */
    assignment_id: string;
    /** ID */
    user_id: string;
  };

export type mark_rubric_assessments_as_read_sections_rubric_commentsSearchParameters =
  Masquerade;

type Options = {
  pathParams: mark_rubric_assessments_as_read_sections_rubric_commentsPathParameters;
} & (
  | {
      searchParams?: Partial<mark_rubric_assessments_as_read_sections_rubric_commentsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_rubric_assessments_as_read_sections_rubric_commentsSearchParameters;
      strict: true;
    }
);

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
 * Nickname: mark_rubric_assessments_as_read_sections_rubric_comments
 */
export async function mark_rubric_assessments_as_read_sections_rubric_comments(
  options: Options
) {
  const response = await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
