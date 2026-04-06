import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type mark_entry_as_read_groupsPathParameters = {
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
  /**
   * ID
   *
   * Type: string
   */
  entry_id: string | number;
};

export type mark_entry_as_read_groupsSearchParameters = Masquerade;

export type mark_entry_as_read_groupsFormParameters = Masquerade & {
  /**
   * A boolean value to set the entry's forced_read_state. No change is made
   * if this argument is not specified.
   *
   * Type: boolean
   */
  forced_read_state: boolean | string;
};

type Options = (
  | {
      path: mark_entry_as_read_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_entry_as_read_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_entry_as_read_groupsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<mark_entry_as_read_groupsSearchParameters>;
        body?: Partial<mark_entry_as_read_groupsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<mark_entry_as_read_groupsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: mark_entry_as_read_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: mark_entry_as_read_groupsSearchParameters;
          }
      ) &
        (
          | {
              body: mark_entry_as_read_groupsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: mark_entry_as_read_groupsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Mark entry as read
 *
 * Mark a discussion entry as read.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_entry_as_read_groups
 */
export async function mark_entry_as_read_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
