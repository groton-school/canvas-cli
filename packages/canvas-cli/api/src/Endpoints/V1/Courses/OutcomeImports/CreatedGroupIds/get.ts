import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get IDs of outcome groups created after successful import
 *
 * Get the IDs of the outcome groups created after a successful import. Pass
 * 'latest' for the outcome import id for the latest import.
 *
 * Examples: curl
 * 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/outcomes_group_ids/<outcome_import_id>'\
 * -H "Authorization: Bearer <token>" curl
 * 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/outcome_group_ids/<outcome_import_id>'\
 * -H "Authorization: Bearer <token>"
 *
 * Nickname: get_ids_of_outcome_groups_created_after_successful_import_courses
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/outcome_imports/{id}/created_group_ids`,
    {
      method: 'GET',
      pathParams
    }
  );
}
