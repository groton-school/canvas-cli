import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Abort all pending SIS imports
 *
 * Abort already created but not processed or processing SIS imports.
 *
 * Nickname: abort_all_pending_sis_imports
 */
export async function abort_all_pending_sis_imports({ parameters }: Options) {
  return await client().fetchAs<boolean>(
    `/v1/accounts/{account_id}/sis_imports/abort_all_pending`,
    { method: 'PUT', params: parameters }
  );
}
