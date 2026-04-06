import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Group } from '../../../Resources/Groups.js';

export type delete_groupPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type delete_groupSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_groupPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_groupPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_groupSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_groupSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_groupSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: delete_groupSearchParameters;
        strict: true;
      }
  );

/**
 * Delete a group
 *
 * Deletes a group and removes all members.
 *
 * Nickname: delete_group
 */
export async function delete_group(options: Options) {
  const response = await client().fetchAs<Group>(`/api/v1/groups/{group_id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
