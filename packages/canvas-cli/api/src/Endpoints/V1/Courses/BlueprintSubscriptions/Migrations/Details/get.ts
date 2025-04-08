import { client } from '../../../../../../Client.js';
import { ChangeRecord } from '../../../../../../Resources/BlueprintCourses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

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
export async function get({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations/{id}/details`,
    { method: 'GET', params: parameters }
  );
}
