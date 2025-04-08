import { client } from '../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single appointment group
 *
 * Returns information for a single appointment group
 *
 * Nickname: get_single_appointment_group
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/appointment_groups/{id}`, {
    method: 'GET',
    params: parameters
  });
}
