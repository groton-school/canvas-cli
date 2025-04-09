import { client } from '../../../../Client.js';
import { Group } from '../../../../Resources/Groups.js';

export type listPathParameters = {
  /** ID */
  group_category_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List groups in group category
 *
 * Returns a paginated list of groups in a group category
 *
 * Nickname: list_groups_in_group_category
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/group_categories/{group_category_id}/groups`,
    {
      method: 'GET',
      pathParams
    }
  );
}
