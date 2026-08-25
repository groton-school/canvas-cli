import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type delete_poll_sessionPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  poll_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type delete_poll_sessionSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_poll_sessionPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_poll_sessionPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_poll_sessionSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_poll_sessionSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_poll_sessionSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_poll_sessionSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a poll session
 *
 * <b>204 No Content</b> response code is returned if the deletion was successful.
 *
 * nickname: delete_poll_session
 *
 *
 *
 *
 */
export async function delete_poll_session(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/polls/{poll_id}/poll_sessions/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
