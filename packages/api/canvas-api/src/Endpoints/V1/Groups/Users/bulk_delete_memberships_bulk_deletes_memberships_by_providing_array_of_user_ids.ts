import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { JSONForsingledeletionoktrueForbulkdeletionjsonmessageBulkdeletecompleteddeleted_user_ids123456unauthorized_user_ids789 } from '../../../../Overrides.js';

export type bulk_delete_memberships_bulk_deletes_memberships_by_providing_array_of_user_idsPathParameters =
  {
    /**
     * ID
     *
     * Type: string
     */
    group_id: string | number;
  };

export type bulk_delete_memberships_bulk_deletes_memberships_by_providing_array_of_user_idsSearchParameters =
  Masquerade &
    Paginated &
    Partial<{
      /**
       * - An array of user IDs to delete memberships in bulk.
       *
       * Format: 'int64'
       */
      user_ids: number | string[];
    }>;

type Options = {
  pathParams: bulk_delete_memberships_bulk_deletes_memberships_by_providing_array_of_user_idsPathParameters;
} & (
  | {
      searchParams?: Partial<bulk_delete_memberships_bulk_deletes_memberships_by_providing_array_of_user_idsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: bulk_delete_memberships_bulk_deletes_memberships_by_providing_array_of_user_idsSearchParameters;
      strict: true;
    }
);

/**
 * Bulk delete memberships Bulk deletes memberships by providing an array of
 * user IDs.
 *
 * Nickname:
 * bulk_delete_memberships_bulk_deletes_memberships_by_providing_array_of_user_ids
 */
export async function bulk_delete_memberships_bulk_deletes_memberships_by_providing_array_of_user_ids(
  options: Options
) {
  const response = await client().fetchAs<
    JSONForsingledeletionoktrueForbulkdeletionjsonmessageBulkdeletecompleteddeleted_user_ids123456unauthorized_user_ids789[]
  >(`/api/v1/groups/{group_id}/users`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
