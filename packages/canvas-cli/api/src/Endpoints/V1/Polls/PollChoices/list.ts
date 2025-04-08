import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List poll choices in a poll
 *
 * Returns the paginated list of PollChoices in this poll.
 *
 * Nickname: list_poll_choices_in_poll
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{poll_id}/poll_choices`, {
    method: 'GET',
    params: parameters
  });
}
