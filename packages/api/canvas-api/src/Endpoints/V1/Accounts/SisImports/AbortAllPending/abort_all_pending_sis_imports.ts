import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type abort_all_pending_sis_importsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type abort_all_pending_sis_importsSearchParameters = Masquerade;

type Options = {
  pathParams: abort_all_pending_sis_importsPathParameters;
} & (
  | {
      searchParams?: Partial<abort_all_pending_sis_importsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: abort_all_pending_sis_importsSearchParameters;
      strict: true;
    }
);

/**
 * Abort all pending SIS imports
 *
 * Abort already created but not processed or processing SIS imports.
 *
 * Nickname: abort_all_pending_sis_imports
 */
export async function abort_all_pending_sis_imports(options: Options) {
  const response = await client().fetchAs<boolean | string>(
    `/api/v1/accounts/{account_id}/sis_imports/abort_all_pending`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
