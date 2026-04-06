import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type getSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get all outcome groups for context
 *
 * Returns a list of all outcome groups in the specified context.
 *
 * Nickname: get_all_outcome_groups_for_context_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<OutcomeGroup[]>(
    `/api/v1/courses/{course_id}/outcome_groups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
