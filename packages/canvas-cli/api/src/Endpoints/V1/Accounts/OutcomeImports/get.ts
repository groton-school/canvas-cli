import { client } from '../../../../Client.js';
import { OutcomeImport } from '../../../../Resources/OutcomeImports.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get Outcome import status
 *
 * Get the status of an already created Outcome import. Pass 'latest' for the
 * outcome import id for the latest import.
 *
 * Examples: curl
 * 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/<outcome_import_id>'\
 * -H "Authorization: Bearer <token>" curl
 * 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/<outcome_import_id>'\
 * -H "Authorization: Bearer <token>"
 *
 * Nickname: get_outcome_import_status_accounts
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<OutcomeImport>(
    `/v1/accounts/{account_id}/outcome_imports/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
