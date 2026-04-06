import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { GradingStandard } from '../../../../Resources/GradingStandards.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List the grading standards available in a context.
 *
 * Returns the paginated list of grading standards for the given context that
 * are visible to the user.
 *
 * Nickname: list_grading_standards_available_in_context_accounts
 */
export async function list(options: Options) {
  const response = await client().fetchAs<GradingStandard[]>(
    `/api/v1/accounts/{account_id}/grading_standards`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
