import { Masquerade } from '@groton/canvas-cli.client.base';
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

export type show_blueprint_importSearchParameters = Masquerade;

type Options = {
  pathParams: show_blueprint_importPathParameters;
} & (
  | {
      searchParams?: Partial<show_blueprint_importSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_blueprint_importSearchParameters;
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
export async function show_blueprint_import(options: Options) {
  const response = await client().fetchAs<BlueprintMigration>(
    `/api/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
