import { client } from '../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * List polls
 *
 * Returns the paginated list of polls for the current user.
 *
 * Nickname: list_polls
 */
export async function list(options: Options) {
  return await client().fetchAs<void>(`/api/v1/polls`, {
    method: 'GET',
    ...options
  });
}
