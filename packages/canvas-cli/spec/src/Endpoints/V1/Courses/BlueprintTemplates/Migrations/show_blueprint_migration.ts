import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show a blueprint migration
 *
 * Shows the status of a migration. This endpoint can be called on a blueprint
 * course. See also {api:MasterCourses::MasterTemplatesController#imports_show
 * the associated course side}.
 *
 * Nickname: show_blueprint_migration
 */
export async function show_blueprint_migration({
  parameters
}: Options): Promise<BlueprintMigration> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations/{id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
