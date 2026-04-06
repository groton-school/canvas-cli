import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type rate_entry_groupsPathParameters = {
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

export type rate_entry_groupsSearchParameters = Masquerade;

export type rate_entry_groupsFormParameters = Masquerade & {
  /**
   * A rating to set on this entry. Only 0 and 1 are accepted.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  rating: number | string;
};

type Options = (
  | {
      path: rate_entry_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: rate_entry_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<rate_entry_groupsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<rate_entry_groupsSearchParameters>;
        body?: Partial<rate_entry_groupsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<rate_entry_groupsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: rate_entry_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: rate_entry_groupsSearchParameters;
          }
      ) &
        (
          | {
              body: rate_entry_groupsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: rate_entry_groupsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Rate entry
 *
 * Rate a discussion entry.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: rate_entry_groups
 */
export async function rate_entry_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
