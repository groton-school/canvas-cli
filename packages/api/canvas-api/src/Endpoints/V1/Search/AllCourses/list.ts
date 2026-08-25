import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * Search terms used for matching users/courses/groups (e.g. &quot;bob smith&quot;). If
multiple terms are given (separated via whitespace), only results matching
all terms will be returned.
     *
     * 
     *
     * 
     */
    search: string;
    /**
     * Only return courses with public content. Defaults to false.
     *
     * type: boolean
     *
     *
     */
    public_only: boolean | string;
    /**
     * Only return courses that allow self enrollment. Defaults to false.
     *
     * type: boolean
     *
     *
     */
    open_enrollment_only: boolean | string;
  }>;

type Options =
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
    });

/**
 * List all courses
 *
 * A paginated list of all courses visible in the public index
 *
 * nickname: list_all_courses
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/search/all_courses`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
