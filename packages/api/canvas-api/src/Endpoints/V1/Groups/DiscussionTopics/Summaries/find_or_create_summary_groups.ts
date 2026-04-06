import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type find_or_create_summary_groupsPathParameters = {
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

export type find_or_create_summary_groupsSearchParameters = Masquerade;

export type find_or_create_summary_groupsFormParameters = Masquerade & {
  /** Areas or topics for the summary to focus on. */
  userInput: string;
};

type Options = (
  | {
      path: find_or_create_summary_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: find_or_create_summary_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<find_or_create_summary_groupsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<find_or_create_summary_groupsSearchParameters>;
        body?: Partial<find_or_create_summary_groupsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<find_or_create_summary_groupsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: find_or_create_summary_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: find_or_create_summary_groupsSearchParameters;
          }
      ) &
        (
          | {
              body: find_or_create_summary_groupsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: find_or_create_summary_groupsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Find or Create Summary
 *
 * Generates a summary for a discussion topic. Returns the summary text and
 * usage information.
 *
 * Nickname: find_or_create_summary_groups
 */
export async function find_or_create_summary_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/summaries`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
