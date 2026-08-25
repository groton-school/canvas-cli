import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { NamesAndRoleMemberships } from '../../../../Resources/NamesAndRole.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * If specified only NamesAndRoleMemberships with access to the LTI link references by this &#x60;rlid&#x60; will be included.
Also causes the member array to be included for each returned NamesAndRoleMembership.
If the &#x60;role&#x60; parameter is also present, it will be &#x27;and-ed&#x27; together with this parameter
     *
     * 
     *
     * 
     */
    rlid: string;
    /**
     * If specified only NamesAndRoleMemberships having this role in the given Course will be included.
Value must be a fully-qualified LTI/LIS role URN.
If the &#x60;rlid&#x60; parameter is also present, it will be &#x27;and-ed&#x27; together with this parameter
     *
     * 
     *
     * 
     */
    role: string;
    /**
     * May be used to limit the number of NamesAndRoleMemberships returned in a page. Defaults to 50.
     *
     *
     *
     *
     */
    limit: string;
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
 * List Course Memberships
 *
 * Return active NamesAndRoleMemberships in the given course.
 *
 * nickname: list_course_memberships
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<NamesAndRoleMemberships>(
    `/api/lti/courses/{course_id}/names_and_roles`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
