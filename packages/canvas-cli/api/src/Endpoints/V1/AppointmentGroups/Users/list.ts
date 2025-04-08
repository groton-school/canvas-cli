import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List user participants
 *
 * A paginated list of users that are (or may be) participating in this
 * appointment group. Refer to the Users API for the response fields. Returns no
 * results for appointment groups with the "Group" participant_type.
 *
 * Nickname: list_user_participants
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/appointment_groups/{id}/users`, {
    method: 'GET',
    params: parameters
  });
}
