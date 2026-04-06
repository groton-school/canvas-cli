import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
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
      })
  );

/**
 * List rubrics
 *
 * Returns the paginated list of active rubrics for the current context.
 *
 * Nickname: list_rubrics_accounts
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/rubrics`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
