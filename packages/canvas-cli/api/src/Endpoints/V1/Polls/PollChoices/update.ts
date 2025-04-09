import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
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
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update a single poll choice
 *
 * Update an existing poll choice for this poll
 *
 * Nickname: update_single_poll_choice
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{poll_id}/poll_choices/{id}`, {
    method: 'PUT',
    pathParams,
    params
  });
}
