import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { ChangeRecord } from '../../../../../Resources/BlueprintCourses.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  template_id: string;
};

export type getSearchParameters = Paginated;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
  return await client().fetchAs<ChangeRecord[]>(
    `/v1/courses/{course_id}/blueprint_templates/{template_id}/unsynced_changes`,
    {
      method: 'GET',
      pathParams
    }
  );
}
