import { client } from '../../../../../Client.js';
import { SisImportError } from '../../../../../Resources/SisImportErrors.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /** If set, only shows errors on a sis import that would cause a failure. */
  failure: boolean;
};

type Options = {
  pathParams: getPathParameters;
  searchParams?: getSearchParameters;
};

/**
 * Get SIS import error list
 *
 * Returns the list of SIS import errors for an account or a SIS import. Import
 * errors are only stored for 30 days.
 *
 * Example: curl
 * 'https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<id>/sis_import_errors'\
 * -H "Authorization: Bearer <token>"
 *
 * Example: curl
 * 'https://<canvas>/api/v1/accounts/<account_id>/sis_import_errors'\
 * -H "Authorization: Bearer <token>"
 *
 * Nickname: get_sis_import_error_list_sis_imports
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/sis_imports/{id}/errors`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
