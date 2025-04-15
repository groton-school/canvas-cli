import { client } from '../../../../Client.js';
import { SisImport } from '../../../../Resources/SisImports.js';

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
export async function get(options: Options) {
  return await client().fetchAs<SisImport>(
    `/api/v1/accounts/{account_id}/sis_imports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
