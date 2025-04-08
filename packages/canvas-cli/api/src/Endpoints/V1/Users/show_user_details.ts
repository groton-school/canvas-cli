import { client } from '../../../Client.js';
import { User } from '../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show user details
 *
 * Shows details for user.
 *
 * Also includes an attribute "permissions", a non-comprehensive list of
 * permissions for the user. Example: !!!javascript "permissions": {
 * "can_update_name": true, // Whether the user can update their name.
 * "can_update_avatar": false, // Whether the user can update their avatar.
 * "limit_parent_app_web_access": false // Whether the user can interact with
 * Canvas web from the Canvas Parent app. }
 *
 * Nickname: show_user_details
 */
export async function show_user_details({ parameters }: Options) {
  return await client().fetchAs<User>(`/v1/users/{id}`, {
    method: 'GET',
    params: parameters
  });
}
