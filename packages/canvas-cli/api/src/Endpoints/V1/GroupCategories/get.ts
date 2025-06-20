import { client } from '../../../Client.js';
import { GroupCategory } from '../../../Resources/GroupCategories.js';

export type getPathParameters = {
  /** ID */
  group_category_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a single group category
 *
 * Returns the data for a single group category, or a 401 if the caller doesn't
 * have the rights to see it.
 *
 * Nickname: get_single_group_category
 */
export async function get(options: Options) {
  const response = await client().fetchAs<GroupCategory>(
    `/api/v1/group_categories/{group_category_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
