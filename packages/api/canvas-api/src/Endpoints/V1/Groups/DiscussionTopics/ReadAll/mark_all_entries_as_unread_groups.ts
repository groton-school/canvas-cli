import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type mark_all_entries_as_unread_groupsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  topic_id: string | number;
};

export type mark_all_entries_as_unread_groupsSearchParameters = Masquerade &
  Partial<{
    /**
     * A boolean value to set all of the entries' forced_read_state. No change
     * is made if this argument is not specified.
     *
     * Type: boolean
     */
    forced_read_state: boolean | string;
  }>;

type Options = (
  | {
      path: mark_all_entries_as_unread_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_all_entries_as_unread_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_all_entries_as_unread_groupsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<mark_all_entries_as_unread_groupsSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<mark_all_entries_as_unread_groupsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: mark_all_entries_as_unread_groupsSearchParameters;
        strict: true;
      }
  );

/**
 * Mark all entries as unread
 *
 * Mark the discussion topic and all its entries as unread.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_all_entries_as_unread_groups
 */
export async function mark_all_entries_as_unread_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/read_all`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
