import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  subscription_id: string;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

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
export async function list(options: Options) {
  const response = await client().fetchAs<BlueprintMigration[]>(
    `/api/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
