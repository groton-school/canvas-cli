import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { ChangeRecord } from '../../../../../../Resources/BlueprintCourses.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  subscription_id: string;
  /** ID */
  id: string;
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
 * Get import details
 *
 * Show the changes that were propagated to a course associated with a
 * blueprint. See also
 * {api:MasterCourses::MasterTemplatesController#migration_details the blueprint
 * course side}.
 *
 * Nickname: get_import_details
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ChangeRecord[]>(
    `/api/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations/{id}/details`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
