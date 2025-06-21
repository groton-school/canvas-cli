import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { RubricImport } from '../../../../../Overrides.js';

export type creates_rubric_using_csv_file_accountsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type creates_rubric_using_csv_file_accountsSearchParameters = Masquerade;

type Options = {
  pathParams: creates_rubric_using_csv_file_accountsPathParameters;
} & (
  | {
      searchParams?: Partial<creates_rubric_using_csv_file_accountsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: creates_rubric_using_csv_file_accountsSearchParameters;
      strict: true;
    }
);

/**
 * Creates a rubric using a CSV file
 *
 * Returns the rubric import object that was created
 *
 * Nickname: creates_rubric_using_csv_file_accounts
 */
export async function creates_rubric_using_csv_file_accounts(options: Options) {
  const response = await client().fetchAs<RubricImport>(
    `/api/v1/accounts/{account_id}/rubrics/upload`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
