import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Group } from '../../../../Resources/Groups.js';

export type listPathParameters = {
  /** ID */
  group_category_id: string;
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
 * List groups in group category
 *
 * Returns a paginated list of groups in a group category
 *
 * Nickname: list_groups_in_group_category
 */
export async function list(options: Options) {
  return await client().fetchAs<Group[]>(
    `/api/v1/group_categories/{group_category_id}/groups`,
    {
      method: 'GET',
      ...options
    }
  );
}
