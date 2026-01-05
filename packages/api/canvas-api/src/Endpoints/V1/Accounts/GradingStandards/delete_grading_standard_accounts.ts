import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
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

type Options = {
  pathParams: delete_grading_standard_accountsPathParameters;
} & (
  | {
      searchParams?: Partial<delete_grading_standard_accountsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_grading_standard_accountsSearchParameters;
      strict: true;
    }
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
