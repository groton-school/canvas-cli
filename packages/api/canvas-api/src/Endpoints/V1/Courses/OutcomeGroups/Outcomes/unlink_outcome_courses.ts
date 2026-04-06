import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

export type unlink_outcome_coursesPathParameters = {
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
  id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  outcome_id: string | number;
};

export type unlink_outcome_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: unlink_outcome_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: unlink_outcome_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<unlink_outcome_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<unlink_outcome_coursesSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<unlink_outcome_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: unlink_outcome_coursesSearchParameters;
        strict: true;
      }
  );

/**
 * Unlink an outcome
 *
 * Unlinking an outcome only deletes the outcome itself if this was the last
 * link to the outcome in any group in any context. Aligned outcomes cannot be
 * deleted; as such, if this is the last link to an aligned outcome, the
 * unlinking will fail.
 *
 * Nickname: unlink_outcome_courses
 */
export async function unlink_outcome_courses(options: Options) {
  const response = await client().fetchAs<OutcomeLink>(
    `/api/v1/courses/{course_id}/outcome_groups/{id}/outcomes/{outcome_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
