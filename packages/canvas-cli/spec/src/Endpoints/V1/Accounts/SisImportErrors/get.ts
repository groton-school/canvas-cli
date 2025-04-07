import { SisImportError } from '../../../../Resources/SisImportErrors.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
 * Nickname: get_sis_import_error_list_sis_import_errors
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/sis_import_errors`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
