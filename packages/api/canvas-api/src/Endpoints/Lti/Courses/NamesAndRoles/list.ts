import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { NamesAndRoleMemberships } from '../../../../Resources/NamesAndRole.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * If specified only NamesAndRoleMemberships with access to the LTI link
     * references by this `rlid` will be included. Also causes the member array
     * to be included for each returned NamesAndRoleMembership. If the `role`
     * parameter is also present, it will be 'and-ed' together with this
     * parameter
     */
    rlid: string;
    /**
     * If specified only NamesAndRoleMemberships having this role in the given
     * Course will be included. Value must be a fully-qualified LTI/LIS role
     * URN. If the `rlid` parameter is also present, it will be 'and-ed'
     * together with this parameter
     */
    role: string;
    /**
     * May be used to limit the number of NamesAndRoleMemberships returned in a
     * page. Defaults to 50.
     */
    limit: string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List Course Memberships
 *
 * Return active NamesAndRoleMemberships in the given course.
 *
 * Nickname: list_course_memberships
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
