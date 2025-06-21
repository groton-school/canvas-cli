import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type abort_all_pending_sis_importsPathParameters = {
  /** ID */
  account_id: string;
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
  const response = await client().fetchAs<boolean>(
    `/api/v1/accounts/{account_id}/sis_imports/abort_all_pending`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
