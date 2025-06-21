import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type export_groups_in_and_users_in_categoryPathParameters = {
  /** ID */
  group_category_id: string;
};

export type export_groups_in_and_users_in_categorySearchParameters = Masquerade;

type Options = {
  pathParams: export_groups_in_and_users_in_categoryPathParameters;
} & (
  | {
      searchParams?: Partial<export_groups_in_and_users_in_categorySearchParameters>;
      strict?: false;
    }
  | {
      searchParams: export_groups_in_and_users_in_categorySearchParameters;
      strict: true;
    }
);

/**
 * Export groups in and users in category
 *
 * Returns a csv file of users in format ready to import.
 *
 * Nickname: export_groups_in_and_users_in_category
 */
export async function export_groups_in_and_users_in_category(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/group_categories/{group_category_id}/export`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
