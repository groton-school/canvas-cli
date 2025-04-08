import { client } from '../../../../Client.js';
import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List LTI Resource Links
 *
 * Returns all Resource Links in the specified course. This includes links that
 * are associated with Assignments, Module Items, Collaborations, and that are
 * embedded in rich content. This endpoint is paginated, and will return 50
 * links per page by default. Links are sorted by the order in which they were
 * created.
 *
 * Nickname: list_lti_resource_links
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/lti_resource_links`,
    { method: 'GET', params: parameters }
  );
}
