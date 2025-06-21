import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { OutcomeImport } from '../../../../Resources/OutcomeImports.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = Masquerade;

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
export async function get(options: Options) {
  const response = await client().fetchAs<OutcomeImport>(
    `/api/v1/courses/{course_id}/outcome_imports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
