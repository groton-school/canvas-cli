import { client } from '../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List appointment groups
 *
 * Retrieve the paginated list of appointment groups that can be reserved or
 * managed by the current user.
 *
 * Nickname: list_appointment_groups
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/appointment_groups`, {
    method: 'GET',
    params: parameters
  });
}
