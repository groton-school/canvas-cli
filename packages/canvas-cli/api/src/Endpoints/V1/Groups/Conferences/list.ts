import { client } from '../../../../Client.js';
import { Conference } from '../../../../Resources/Conferences.js';

type listPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List conferences
 *
 * Retrieve the paginated list of conferences for this context
 *
 * This API returns a JSON object containing the list of conferences, the key
 * for the list of conferences is "conferences"
 *
 * Nickname: list_conferences_groups
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/groups/{group_id}/conferences`, {
    method: 'GET',
    pathParams
  });
}
