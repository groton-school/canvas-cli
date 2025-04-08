import { client } from '../../../../Client.js';
import { Avatar } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List avatar options
 *
 * A paginated list of the possible user avatar options that can be set with the
 * user update endpoint. The response will be an array of avatar records. If the
 * 'type' field is 'attachment', the record will include all the normal
 * attachment json fields; otherwise it will include only the 'url' and
 * 'display_name' fields. Additionally, all records will include a 'type' field
 * and a 'token' field. The following explains each field in more detail type::
 * ["gravatar"|"attachment"|"no_pic"] The type of avatar record, for
 * categorization purposes. url:: The url of the avatar token:: A unique
 * representation of the avatar record which can be used to set the avatar with
 * the user update endpoint. Note: this is an internal representation and is
 * subject to change without notice. It should be consumed with this api
 * endpoint and used in the user update endpoint, and should not be constructed
 * by the client. display_name:: A textual description of the avatar record id::
 * ['attachment' type only] the internal id of the attachment content-type::
 * ['attachment' type only] the content-type of the attachment filename::
 * ['attachment' type only] the filename of the attachment size:: ['attachment'
 * type only] the size of the attachment
 *
 * Nickname: list_avatar_options
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/{user_id}/avatars`, {
    method: 'GET',
    params: parameters
  });
}
