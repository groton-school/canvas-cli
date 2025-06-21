import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { ChangeRecord } from '../../../../../Resources/BlueprintCourses.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  template_id: string | number;
};

export type getSearchParameters = Masquerade & Paginated;

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
 * Get unsynced changes
 *
 * Retrieve a list of learning objects that have changed since the last
 * blueprint sync operation. If no syncs have been completed, a ChangeRecord
 * with a change_type of +initial_sync+ is returned.
 *
 * Nickname: get_unsynced_changes
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ChangeRecord[]>(
    `/api/v1/courses/{course_id}/blueprint_templates/{template_id}/unsynced_changes`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
