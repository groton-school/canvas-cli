import { client } from '../../../../Client.js';
import { OutcomeImport } from '../../../../Resources/OutcomeImports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
 * Nickname: get_outcome_import_status_courses
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<OutcomeImport>(
    `/v1/courses/{course_id}/outcome_imports/{id}`,
    { method: 'GET', params: parameters }
  );
}
