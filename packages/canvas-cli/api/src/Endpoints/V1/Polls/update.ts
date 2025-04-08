import { client } from '../../../Client.js';

type Parameters = {
  /** The title of the poll. */
  'polls[question]': string[];
  /** A brief description or instructions for the poll. */
  'polls[description]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a single poll
 *
 * Update an existing poll belonging to the current user
 *
 * Nickname: update_single_poll
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{id}`, {
    method: 'PUT',
    params: parameters
  });
}
