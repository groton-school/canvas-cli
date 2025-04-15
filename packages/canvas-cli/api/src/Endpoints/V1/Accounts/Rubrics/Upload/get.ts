import { client } from '../../../../../Client.js';
import { RubricImport } from '../../../../../Overrides.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get the status of a rubric import
 *
 * Can return the latest rubric import for an account or course, or a specific
 * import by id
 *
 * Nickname: get_status_of_rubric_import_accounts
 */
export async function get(options: Options) {
  return await client().fetchAs<RubricImport>(
    `/api/v1/accounts/{account_id}/rubrics/upload/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
