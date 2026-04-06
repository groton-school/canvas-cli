import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type publish_provisional_grades_for_assignmentPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
};

export type publish_provisional_grades_for_assignmentSearchParameters =
  Masquerade;

type Options = (
  | {
      path: publish_provisional_grades_for_assignmentPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: publish_provisional_grades_for_assignmentPathParameters;
    }
) &
  (
    | {
        query?: Partial<publish_provisional_grades_for_assignmentSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<publish_provisional_grades_for_assignmentSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: publish_provisional_grades_for_assignmentSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: publish_provisional_grades_for_assignmentSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Publish provisional grades for an assignment
 *
 * Publish the selected provisional grade for all submissions to an assignment.
 * Use the "Select provisional grade" endpoint to choose which provisional grade
 * to publish for a particular submission.
 *
 * Students not in the moderation set will have their one and only provisional
 * grade published.
 *
 * WARNING: This is irreversible. This will overwrite existing grades in the
 * gradebook.
 *
 * Nickname: publish_provisional_grades_for_assignment
 */
export async function publish_provisional_grades_for_assignment(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/publish`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
