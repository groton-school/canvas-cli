import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Permissions
 *
 * Returns permission information for the calling user in the given group. See
 * also the {api:AccountsController#permissions Account} and
 * {api:CoursesController#permissions Course} counterparts.
 *
 * Nickname: permissions
 */
export async function permissions({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/groups/{group_id}/permissions`, {
    method: 'GET',
    params: parameters
  });
}
