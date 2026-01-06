import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type getSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get IDs of outcome groups created after successful import
 *
 * Get the IDs of the outcome groups created after a successful import. Pass
 * 'latest' for the outcome import id for the latest import.
 *
 * Examples: curl
 * 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/outcomes_group_ids/<outcome_import_id>'\
 * -H "Authorization: Bearer <token>" curl
 * 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/outcome_group_ids/<outcome_import_id>'\
 * -H "Authorization: Bearer <token>"
 *
 * Nickname: get_ids_of_outcome_groups_created_after_successful_import_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<string[]>(
    `/api/v1/courses/{course_id}/outcome_imports/{id}/created_group_ids`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
