import { client } from '../../../../../Client.js';
import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show a blueprint import
 *
 * Shows the status of an import into a course associated with a blueprint. See
 * also {api:MasterCourses::MasterTemplatesController#migrations_show the
 * blueprint course side}.
 *
 * Nickname: show_blueprint_import
 */
export async function show_blueprint_import({ parameters }: Options) {
  return await client().fetchAs<BlueprintMigration>(
    `/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations/{id}`,
    { method: 'GET', params: parameters }
  );
}
