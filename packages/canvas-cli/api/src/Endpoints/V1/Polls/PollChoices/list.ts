import { client } from '../../../../Client.js';

export type listPathParameters = {
  /** ID */
  poll_id: string;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List poll choices in a poll
 *
 * Returns the paginated list of PollChoices in this poll.
 *
 * Nickname: list_poll_choices_in_poll
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_choices`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
