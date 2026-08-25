import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

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
 * List polls
 *
 * Returns the paginated list of polls for the current user.
 *
 * nickname: list_polls
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(`/api/v1/polls`, {
    method: 'GET',
    ...options
  });
  return response;
}
