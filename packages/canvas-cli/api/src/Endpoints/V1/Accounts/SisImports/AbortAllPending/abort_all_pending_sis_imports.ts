import { client } from '../../../../../Client.js';

export type abort_all_pending_sis_importsPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: abort_all_pending_sis_importsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<boolean>(
    `/api/v1/accounts/{account_id}/sis_imports/abort_all_pending`,
    {
      method: 'PUT',
      ...options
    }
  );
}
