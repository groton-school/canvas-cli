import { client } from '../../../../Client.js';
import { SisImport } from '../../../../Resources/SisImports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get SIS import status
 *
 * Get the status of an already created SIS import.
 *
 * Examples: curl
 * https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<sis_import_id>\
 * -H 'Authorization: Bearer <token>'
 *
 * Nickname: get_sis_import_status
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<SisImport>(
    `/v1/accounts/{account_id}/sis_imports/{id}`,
    { method: 'GET', params: parameters }
  );
}
