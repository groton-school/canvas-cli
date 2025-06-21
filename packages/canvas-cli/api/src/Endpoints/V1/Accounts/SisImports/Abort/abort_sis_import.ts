import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { SisImport } from '../../../../../Resources/SisImports.js';

export type abort_sis_importPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type abort_sis_importSearchParameters = Masquerade;

type Options = {
  pathParams: abort_sis_importPathParameters;
} & (
  | {
      searchParams?: Partial<abort_sis_importSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: abort_sis_importSearchParameters;
      strict: true;
    }
);

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
export async function abort_sis_import(options: Options) {
  const response = await client().fetchAs<SisImport>(
    `/api/v1/accounts/{account_id}/sis_imports/{id}/abort`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
