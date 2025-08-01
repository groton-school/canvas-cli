import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { SisImport } from '../../../../../Resources/SisImports.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
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
export async function get(options: Options) {
  const response = await client().fetchAs<SisImport>(
    `/api/v1/accounts/{account_id}/sis_imports/importing`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
