import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type listSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: listSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: listSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * List opened poll sessions
 *
 * A paginated list of all opened poll sessions available to the current user.
 *
 * Nickname: list_opened_poll_sessions
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/poll_sessions/opened`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
