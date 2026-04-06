import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type post_entry_groupsPathParameters = {
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

export type post_entry_groupsSearchParameters = Masquerade;

export type post_entry_groupsFormParameters = Masquerade & {
  /** The body of the entry. */
  message: string;
  /**
   * A multipart/form-data form-field-style attachment. Attachments larger
   * than 1 kilobyte are subject to quota restrictions.
   */
  attachment: string;
};

type Options = (
  | {
      path: post_entry_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: post_entry_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<post_entry_groupsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<post_entry_groupsSearchParameters>;
        body?: Partial<post_entry_groupsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<post_entry_groupsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: post_entry_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: post_entry_groupsSearchParameters;
          }
      ) &
        (
          | {
              body: post_entry_groupsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: post_entry_groupsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Post an entry
 *
 * Create a new entry in a discussion topic. Returns a json representation of
 * the created entry (see documentation for 'entries' method) on success.
 *
 * Nickname: post_entry_groups
 */
export async function post_entry_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/entries`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
