import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  template_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
export async function list(options: Options) {
  const response = await client().fetchAs<BlueprintMigration[]>(
    `/api/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
