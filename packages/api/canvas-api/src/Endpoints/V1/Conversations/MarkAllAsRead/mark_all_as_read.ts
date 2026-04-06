import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type mark_all_as_readSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<mark_all_as_readSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<mark_all_as_readSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: mark_all_as_readSearchParameters;
        }
      | {
          /** @deprecated Use {Options.query} */
          searchParams: mark_all_as_readSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * Mark all as read
 *
 * Mark all conversations as read.
 *
 * Nickname: mark_all_as_read
 */
export async function mark_all_as_read(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/conversations/mark_all_as_read`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
