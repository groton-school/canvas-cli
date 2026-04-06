import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  poll_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The id of the course this session is associated with.
   *
   * Format: 'int64'
   */
  'poll_sessions[course_id]': number | string[];
  /**
   * The id of the course section this session is associated with.
   *
   * Format: 'int64'
   */
  'poll_sessions[course_section_id]': number | string[];
  /** Whether or not results are viewable by students. */
  'poll_sessions[has_public_results]': boolean | string[];
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create a single poll session
 *
 * Create a new poll session for this poll
 *
 * Nickname: create_single_poll_session
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/polls/{poll_id}/poll_sessions`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
