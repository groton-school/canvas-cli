import { NamesAndRoleMemberships } from '../../../../Resources/NamesAndRole.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List Course Memberships
 *
 * Return active NamesAndRoleMemberships in the given course.
 *
 * Nickname: list_course_memberships
 */
export async function list({
  parameters
}: Options): Promise<NamesAndRoleMemberships> {
  return await (
    await fetch(`/lti/courses/{course_id}/names_and_roles`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
