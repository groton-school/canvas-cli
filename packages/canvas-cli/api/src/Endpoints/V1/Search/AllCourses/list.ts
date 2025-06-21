import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * Search terms used for matching users/courses/groups (e.g. "bob smith").
     * If multiple terms are given (separated via whitespace), only results
     * matching all terms will be returned.
     */
    search: string;
    /** Only return courses with public content. Defaults to false. */
    public_only: boolean;
    /** Only return courses that allow self enrollment. Defaults to false. */
    open_enrollment_only: boolean;
  }>;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List all courses
 *
 * A paginated list of all courses visible in the public index
 *
 * Nickname: list_all_courses
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/search/all_courses`, {
    method: 'GET',
    ...options
  });
  return response;
}
