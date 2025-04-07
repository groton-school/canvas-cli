import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
