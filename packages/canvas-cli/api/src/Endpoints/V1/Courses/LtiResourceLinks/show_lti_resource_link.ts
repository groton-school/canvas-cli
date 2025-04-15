import { client } from '../../../../Client.js';
import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

export type show_lti_resource_linkPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type show_lti_resource_linkSearchParameters = {
  /** Include deleted resource links in search. Default is false. */
  include_deleted: boolean;
};

type Options = {
  pathParams: show_lti_resource_linkPathParameters;
} & (
  | {
      searchParams?: Partial<show_lti_resource_linkSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_lti_resource_linkSearchParameters;
      strict: true;
    }
);

/**
 * Show an LTI Resource Link
 *
 * Return details about the specified resource link. The ID can be in the
 * standard Canvas format ("1"), or in these special formats:
 *
 * - Resource_link_uuid:<uuid> - Find the resource link by its resource_link_uuid
 * - Lookup_uuid:<uuid> - Find the resource link by its lookup_uuid
 *
 * Nickname: show_lti_resource_link
 */
export async function show_lti_resource_link(options: Options) {
  return await client().fetchAs<LtiResourceLink>(
    `/api/v1/courses/{course_id}/lti_resource_links/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
