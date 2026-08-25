import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Submission } from '../../../../../Resources/Submissions.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  section_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  assignment_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Associations to include with the group.  &quot;group&quot; will add group_id and group_name.
     *
     *
     *
     *
     */
    include: string[];
    /**
     * If this argument is true, the response will be grouped by student groups.
     *
     * type: boolean
     *
     *
     */
    grouped: boolean | string;
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List assignment submissions
 *
 * A paginated list of all existing submissions for an assignment.
 *
 * nickname: list_assignment_submissions_sections
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Submission[]>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
