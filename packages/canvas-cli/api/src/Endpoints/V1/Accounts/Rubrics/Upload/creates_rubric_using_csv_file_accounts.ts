import { RubricImport } from '';
import { client } from '../../../../../Client.js';

export type creates_rubric_using_csv_file_accountsPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: creates_rubric_using_csv_file_accountsPathParameters;
};

/**
 * Creates a rubric using a CSV file
 *
 * Returns the rubric import object that was created
 *
 * Nickname: creates_rubric_using_csv_file_accounts
 */
export async function creates_rubric_using_csv_file_accounts({
  pathParams
}: Options) {
  return await client().fetchAs<RubricImport>(
    `/v1/accounts/{account_id}/rubrics/upload`,
    {
      method: 'POST',
      pathParams
    }
  );
}
