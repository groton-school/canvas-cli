import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Conference } from '../../../../Resources/Conferences.js';

export type listPathParameters = {
  /** ID */
  group_id: string;
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
  const response = await client().fetchAs<Conference[]>(
    `/api/v1/groups/{group_id}/conferences`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
