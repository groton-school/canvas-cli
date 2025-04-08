import { client } from '../../../../Client.js';
import { NamesAndRoleMemberships } from '../../../../Resources/NamesAndRole.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List Group Memberships
 *
 * Return active NamesAndRoleMemberships in the given group.
 *
 * Nickname: list_group_memberships
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<NamesAndRoleMemberships>(
    `/lti/groups/{group_id}/names_and_roles`,
    { method: 'GET', params: parameters }
  );
}
