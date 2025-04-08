import { client } from '../../../../../../Client.js';
import { ChangeRecord } from '../../../../../../Resources/BlueprintCourses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

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
export async function get({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations/{id}/details`,
    { method: 'GET', params: parameters }
  );
}
