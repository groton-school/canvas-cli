import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { SisImport } from '../../../../Resources/SisImports.js';

export type getPathParameters = {
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
  id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
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
  const response = await client().fetchAs<SisImport>(
    `/api/v1/accounts/{account_id}/sis_imports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
