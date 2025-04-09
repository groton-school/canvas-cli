import { client } from '../../../../../Client.js';

type abort_all_pending_sis_importsPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: abort_all_pending_sis_importsPathParameters;
};

/**
 * Abort all pending SIS imports
 *
 * Abort already created but not processed or processing SIS imports.
 *
 * Nickname: abort_all_pending_sis_imports
 */
export async function abort_all_pending_sis_imports({ pathParams }: Options) {
  return await client().fetchAs<boolean>(
    `/v1/accounts/{account_id}/sis_imports/abort_all_pending`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
