import { client } from '../../../../Client.js';

export type createPathParameters = {
  /** ID */
  poll_id: string;
};

export type createFormParameters = {
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
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a single poll choice
 *
 * Create a new poll choice for this poll
 *
 * Nickname: create_single_poll_choice
 */
export async function create(options: Options) {
  return await client().fetchAs<void>(`/api/v1/polls/{poll_id}/poll_choices`, {
    method: 'POST',
    ...options
  });
}
