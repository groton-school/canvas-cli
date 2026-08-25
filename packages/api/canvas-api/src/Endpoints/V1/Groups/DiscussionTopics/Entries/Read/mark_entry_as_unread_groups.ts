import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type mark_entry_as_unread_groupsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  topic_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  entry_id: string | number;
};

export type mark_entry_as_unread_groupsSearchParameters = Masquerade &
  Partial<{
    /**
     * A boolean value to set the entry&#x27;s forced_read_state. No change is made if
this argument is not specified.
     *
     * type: boolean
     *
     * 
     */
    forced_read_state: boolean | string;
  }>;

type Options = (
  | {
      path: mark_entry_as_unread_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_entry_as_unread_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_entry_as_unread_groupsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<mark_entry_as_unread_groupsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: mark_entry_as_unread_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: mark_entry_as_unread_groupsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Mark entry as unread
 *
 * Mark a discussion entry as unread.

No request fields are necessary.

On success, the response will be 204 No Content with an empty body.
 *
 * nickname: mark_entry_as_unread_groups
 *
 * 
 *
 * 
 */
export async function mark_entry_as_unread_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/read`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
