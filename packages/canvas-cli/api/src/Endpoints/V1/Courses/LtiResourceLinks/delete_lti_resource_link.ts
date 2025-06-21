import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

export type delete_lti_resource_linkPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type delete_lti_resource_linkSearchParameters = Masquerade;

type Options = {
  pathParams: delete_lti_resource_linkPathParameters;
} & (
  | {
      searchParams?: Partial<delete_lti_resource_linkSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_lti_resource_linkSearchParameters;
      strict: true;
    }
);

/**
 * Delete an LTI Resource Link
 *
 * Delete the specified resource link. The ID can be in the standard Canvas
 * format ("1"), or in these special formats:
 *
 * - Resource_link_uuid:<uuid> - Find the resource link by its resource_link_uuid
 * - Lookup_uuid:<uuid> - Find the resource link by its lookup_uuid
 *
 * Only links that are not associated with Assignments, Module Items, or
 * Collaborations can be deleted.
 *
 * Nickname: delete_lti_resource_link
 */
export async function delete_lti_resource_link(options: Options) {
  const response = await client().fetchAs<LtiResourceLink>(
    `/api/v1/courses/{course_id}/lti_resource_links/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
