import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_pollPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_pollSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_pollPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_pollPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_pollSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_pollSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_pollSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_pollSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a poll
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll
 */
export async function delete_poll(options: Options) {
  const response = await client().fetchAs<JSONValue>(`/api/v1/polls/{id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
