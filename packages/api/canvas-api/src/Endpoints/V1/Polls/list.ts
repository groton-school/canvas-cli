import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type listSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: listSearchParameters;
        }
      | {
          /** @deprecated Use {Options.query} */
          searchParams: listSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * List polls
 *
 * Returns the paginated list of polls for the current user.
 *
 * Nickname: list_polls
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(`/api/v1/polls`, {
    method: 'GET',
    ...options
  });
  return response;
}
