import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

export type listPathParameters = {
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

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List blueprint migrations
 *
 * Shows a paginated list of migrations for the template, starting with the most
 * recent. This endpoint can be called on a blueprint course. See also
 * {api:MasterCourses::MasterTemplatesController#imports_index the associated
 * course side}.
 *
 * Nickname: list_blueprint_migrations
 */
export async function list(options: Options) {
  const response = await client().fetchAs<BlueprintMigration[]>(
    `/api/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
