import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type hide_all_stream_itemsSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<hide_all_stream_itemsSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<hide_all_stream_itemsSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: hide_all_stream_itemsSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: hide_all_stream_itemsSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * Hide all stream items
 *
 * Hide all stream items for the user
 *
 * nickname: hide_all_stream_items
 *
 *
 *
 *
 */
export async function hide_all_stream_items(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/self/activity_stream`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
