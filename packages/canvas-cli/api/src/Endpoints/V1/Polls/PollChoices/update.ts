import { client } from '../../../../Client.js';

type Parameters = {
  /** The descriptive text of the poll choice. */
  'poll_choices[text]': string[];
  /** Whether this poll choice is considered correct or not. Defaults to false. */
  'poll_choices[is_correct]': string[];
  /**
   * The order this poll choice should be returned in the context it's sibling
   * poll choices.
   *
   * Format: 'int64'
   */
  'poll_choices[position]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a single poll choice
 *
 * Update an existing poll choice for this poll
 *
 * Nickname: update_single_poll_choice
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{poll_id}/poll_choices/{id}`, {
    method: 'PUT',
    params: parameters
  });
}
