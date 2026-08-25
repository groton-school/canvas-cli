import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * - &quot;course_subject_tabs&quot;: Optional flag to return the tabs associated with a canvas_for_elementary subject course&#x27;s
  home page instead of the typical sidebar navigation. Only takes effect if this request is for a course context
  in a canvas_for_elementary-enabled account or sub-account.
     *
     * 
     *
     * 
     */
    include: string[];
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
 * List available tabs for a course or group
 *
 * Returns a paginated list of navigation tabs available in the current context.
 *
 * nickname: list_available_tabs_for_course_or_group_groups
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/tabs`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
