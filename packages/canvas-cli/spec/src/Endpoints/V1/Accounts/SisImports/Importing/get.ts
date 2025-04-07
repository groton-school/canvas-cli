import { SisImport } from '../../../../../Resources/SisImports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get the current importing SIS import
 *
 * Returns the SIS imports that are currently processing for an account. If no
 * imports are running, will return an empty array.
 *
 * Example: curl
 * https://<canvas>/api/v1/accounts/<account_id>/sis_imports/importing\
 * -H 'Authorization: Bearer <token>'
 *
 * Nickname: get_current_importing_sis_import
 */
export async function get({ parameters }: Options): Promise<SisImport> {
  return await (
    await fetch(`/v1/accounts/{account_id}/sis_imports/importing`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
