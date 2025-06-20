import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { ChangeRecord } from '../../../../../../Resources/BlueprintCourses.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  template_id: string;
  /** ID */
  id: string;
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
