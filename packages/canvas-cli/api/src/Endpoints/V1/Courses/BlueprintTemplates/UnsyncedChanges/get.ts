import { client } from '../../../../../Client.js';
import { ChangeRecord } from '../../../../../Resources/BlueprintCourses.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  template_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get unsynced changes
 *
 * Retrieve a list of learning objects that have changed since the last
 * blueprint sync operation. If no syncs have been completed, a ChangeRecord
 * with a change_type of +initial_sync+ is returned.
 *
 * Nickname: get_unsynced_changes
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/blueprint_templates/{template_id}/unsynced_changes`,
    {
      method: 'GET',
      pathParams
    }
  );
}
