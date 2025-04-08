import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Load custom data
 *
 * Load custom user data.
 *
 * Arbitrary JSON data can be stored for a User. This API call retrieves that
 * data for a (optional) given scope. See {api:UsersController#set_custom_data
 * Store Custom Data} for details and examples.
 *
 * On success, this endpoint returns an object containing the data that was
 * requested.
 *
 * Responds with status code 400 if the namespace parameter, +ns+, is missing or
 * invalid, or if the specified scope does not contain any data.
 *
 * Nickname: load_custom_data
 */
export async function load_custom_data({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/custom_data`, {
    method: 'GET',
    params: parameters
  });
}
