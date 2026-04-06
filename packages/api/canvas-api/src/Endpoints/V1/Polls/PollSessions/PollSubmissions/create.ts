import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type createPathParameters = {
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
  poll_session_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The chosen poll choice for this submission.
   *
   * Format: 'int64'
   */
  'poll_submissions[poll_choice_id]': number | string[];
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
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: createSearchParameters;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: createFormParameters;
        strict: true;
      }
  );

/**
 * Create a single poll submission
 *
 * Create a new poll submission for this poll session
 *
 * Nickname: create_single_poll_submission
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/polls/{poll_id}/poll_sessions/{poll_session_id}/poll_submissions`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
