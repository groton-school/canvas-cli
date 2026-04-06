import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type unread_countSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<unread_countSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<unread_countSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: unread_countSearchParameters;
        }
      | {
          /** @deprecated Use {Options.query} */
          searchParams: unread_countSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * Unread count
 *
 * Get the number of unread conversations for the current user
 *
 * Nickname: unread_count
 */
export async function unread_count(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/conversations/unread_count`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
