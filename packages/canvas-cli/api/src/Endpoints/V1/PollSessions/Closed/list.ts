import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type listSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List closed poll sessions
 *
 * A paginated list of all closed poll sessions available to the current user.
 *
 * Nickname: list_closed_poll_sessions
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/poll_sessions/closed`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
