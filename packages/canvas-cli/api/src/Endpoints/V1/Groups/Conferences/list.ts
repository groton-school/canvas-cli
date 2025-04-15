import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Conference } from '../../../../Resources/Conferences.js';

export type listPathParameters = {
  /** ID */
  group_id: string;
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
 * List conferences
 *
 * Retrieve the paginated list of conferences for this context
 *
 * This API returns a JSON object containing the list of conferences, the key
 * for the list of conferences is "conferences"
 *
 * Nickname: list_conferences_groups
 */
export async function list(options: Options) {
  return await client().fetchAs<Conference[]>(
    `/api/v1/groups/{group_id}/conferences`,
    {
      method: 'GET',
      ...options
    }
  );
}
