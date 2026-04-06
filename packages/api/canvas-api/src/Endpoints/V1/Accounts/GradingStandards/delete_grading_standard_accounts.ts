import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { GradingStandard } from '../../../../Resources/GradingStandards.js';

export type delete_grading_standard_accountsPathParameters = {
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

export type delete_grading_standard_accountsSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_grading_standard_accountsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_grading_standard_accountsPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_grading_standard_accountsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_grading_standard_accountsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_grading_standard_accountsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_grading_standard_accountsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a grading standard
 *
 * Deletes the grading standard with the given id
 *
 * Nickname: delete_grading_standard_accounts
 */
export async function delete_grading_standard_accounts(options: Options) {
  const response = await client().fetchAs<GradingStandard>(
    `/api/v1/accounts/{account_id}/grading_standards/{grading_standard_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
