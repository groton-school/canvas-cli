import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List blueprint imports
 *
 * Shows a paginated list of migrations imported into a course associated with a
 * blueprint, starting with the most recent. See also
 * {api:MasterCourses::MasterTemplatesController#migrations_index the blueprint
 * course side}.
 *
 * Use 'default' as the subscription_id to use the currently active blueprint
 * subscription.
 *
 * Nickname: list_blueprint_imports
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
