import { client } from '../../../../../Client.js';
import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

export type show_blueprint_migrationPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  template_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_blueprint_migrationPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
