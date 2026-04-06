import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Submission } from '../../../../Resources/Submissions.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** Associations to include with the group */
    include: string[];
    /**
     * Returns submissions for only currently active enrollments
     *
     * Type: boolean
     */
    only_current_enrollments: boolean | string;
    /**
     * Returns submissions for only published assignments
     *
     * Type: boolean
     */
    only_published_assignments: boolean | string;
  }>;

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
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: getSearchParameters;
        strict: true;
      }
  );

/**
 * Get a users most recently graded submissions
 *
 * Returns a list of the user's most recently graded submissions.
 *
 * Nickname: get_users_most_recently_graded_submissions
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Submission[]>(
    `/api/v1/users/{id}/graded_submissions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
