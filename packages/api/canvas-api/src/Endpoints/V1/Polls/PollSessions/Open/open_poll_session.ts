import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type open_poll_sessionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  poll_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type open_poll_sessionSearchParameters = Masquerade;

type Options = (
  | {
      path: open_poll_sessionPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: open_poll_sessionPathParameters;
    }
) &
  (
    | {
        query?: Partial<open_poll_sessionSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<open_poll_sessionSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: open_poll_sessionSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: open_poll_sessionSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Open a poll session
 *
 * Nickname: open_poll_session
 */
export async function open_poll_session(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/polls/{poll_id}/poll_sessions/{id}/open`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
