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
  'poll_choices[is_correct]': boolean[];
  /**
   * The order this poll choice should be returned in the context it's sibling
   * poll choices.
   *
   * Format: 'int64'
   */
  'poll_choices[position]': number[];
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a single poll choice
 *
 * Update an existing poll choice for this poll
 *
 * Nickname: update_single_poll_choice
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_choices/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
