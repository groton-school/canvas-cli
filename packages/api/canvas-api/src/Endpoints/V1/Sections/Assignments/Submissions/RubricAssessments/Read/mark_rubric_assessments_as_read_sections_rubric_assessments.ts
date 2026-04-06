import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type mark_rubric_assessments_as_read_sections_rubric_assessmentsPathParameters =
  {
    /**
     * ID
     *
     * Type: string
     */
    section_id: string | number;
    /**
     * ID
     *
     * Type: string
     */
    assignment_id: string | number;
    /**
     * ID
     *
     * Type: string
     */
    user_id: string | number;
  };

export type mark_rubric_assessments_as_read_sections_rubric_assessmentsSearchParameters =
  Masquerade;

type Options = (
  | {
      path: mark_rubric_assessments_as_read_sections_rubric_assessmentsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_rubric_assessments_as_read_sections_rubric_assessmentsPathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_rubric_assessments_as_read_sections_rubric_assessmentsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<mark_rubric_assessments_as_read_sections_rubric_assessmentsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: mark_rubric_assessments_as_read_sections_rubric_assessmentsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: mark_rubric_assessments_as_read_sections_rubric_assessmentsSearchParameters;
          }
      ) & {
        strict: true;
      })
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
 * Nickname: mark_rubric_assessments_as_read_sections_rubric_assessments
 */
export async function mark_rubric_assessments_as_read_sections_rubric_assessments(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
