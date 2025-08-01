import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { SisImportError } from '../../../../../Resources/SisImportErrors.js';

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

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * If set, only shows errors on a sis import that would cause a failure.
     *
     * Type: boolean
     */
    failure: boolean | string;
  }>;

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
export async function get(options: Options) {
  const response = await client().fetchAs<SisImportError[]>(
    `/api/v1/accounts/{account_id}/sis_imports/{id}/errors`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
