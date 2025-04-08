import { client } from '../../../../../Client.js';
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
export async function show_blueprint_migration({ parameters }: Options) {
  return await client().fetchAs<BlueprintMigration>(
    `/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations/{id}`,
    { method: 'GET', params: parameters }
  );
}
