import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { ChangeRecord } from '../../../../../../Resources/BlueprintCourses.js';

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
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
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
 * Get migration details
 *
 * Show the changes that were propagated in a blueprint migration. This endpoint
 * can be called on a blueprint course. See also
 * {api:MasterCourses::MasterTemplatesController#import_details the associated
 * course side}.
 *
 * Nickname: get_migration_details
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ChangeRecord[]>(
    `/api/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations/{id}/details`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
