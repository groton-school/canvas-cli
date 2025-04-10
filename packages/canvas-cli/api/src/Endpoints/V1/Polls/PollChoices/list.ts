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
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{poll_id}/poll_choices`, {
    method: 'GET',
    pathParams
  });
}
