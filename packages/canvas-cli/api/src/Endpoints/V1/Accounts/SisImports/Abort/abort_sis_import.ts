import { client } from '../../../../../Client.js';
import { SisImport } from '../../../../../Resources/SisImports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Abort SIS import
 *
 * Abort a SIS import that has not completed.
 *
 * Aborting a sis batch that is running can take some time for every process to
 * see the abort event. Subsequent sis batches begin to process 10 minutes after
 * the abort to allow each process to clean up properly.
 *
 * Nickname: abort_sis_import
 */
export async function abort_sis_import({ parameters }: Options) {
  return await client().fetchAs<SisImport>(
    `/v1/accounts/{account_id}/sis_imports/{id}/abort`,
    { method: 'PUT', params: parameters }
  );
}
