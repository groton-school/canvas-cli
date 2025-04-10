import { client } from '../../../../../Client.js';
import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

export type show_blueprint_importPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  subscription_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_blueprint_importPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show a blueprint import
 *
 * Shows the status of an import into a course associated with a blueprint. See
 * also {api:MasterCourses::MasterTemplatesController#migrations_show the
 * blueprint course side}.
 *
 * Nickname: show_blueprint_import
 */
export async function show_blueprint_import({ pathParams }: Options) {
  return await client().fetchAs<BlueprintMigration>(
    `/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
