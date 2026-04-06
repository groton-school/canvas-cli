import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { GradingStandard } from '../../../../Resources/GradingStandards.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  grading_standard_id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a single grading standard in a context.
 *
 * Returns a grading standard for the given context that is visible to the user.
 *
 * Nickname: get_single_grading_standard_in_context_accounts
 */
export async function get(options: Options) {
  const response = await client().fetchAs<GradingStandard>(
    `/api/v1/accounts/{account_id}/grading_standards/{grading_standard_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
