import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

export type show_blueprint_migrationPathParameters = {
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

export type show_blueprint_migrationSearchParameters = Masquerade;

type Options = {
  pathParams: show_blueprint_migrationPathParameters;
} & (
  | {
      searchParams?: Partial<show_blueprint_migrationSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_blueprint_migrationSearchParameters;
      strict: true;
    }
);

/**
 * Show a blueprint migration
 *
 * Shows the status of a migration. This endpoint can be called on a blueprint
 * course. See also {api:MasterCourses::MasterTemplatesController#imports_show
 * the associated course side}.
 *
 * Nickname: show_blueprint_migration
 */
export async function show_blueprint_migration(options: Options) {
  const response = await client().fetchAs<BlueprintMigration>(
    `/api/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
