import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

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
export async function delete_lti_resource_link({
  parameters
}: Options): Promise<LtiResourceLink> {
  return await (
    await fetch(`/v1/courses/{course_id}/lti_resource_links/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
