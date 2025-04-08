import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Redirect to the assignment override for a section
 *
 * Responds with a redirect to the override for the given section, if any (404
 * otherwise).
 *
 * Nickname: redirect_to_assignment_override_for_section
 */
export async function redirect_to_assignment_override_for_section({
  parameters
}: Options) {
  return await client().fetchAs<void>(
    `/v1/sections/{course_section_id}/assignments/{assignment_id}/override`,
    { method: 'GET', params: parameters }
  );
}
