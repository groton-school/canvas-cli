import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type disable_summary_groupsPathParameters = {
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

export type disable_summary_groupsSearchParameters = Masquerade;

type Options = (
  | {
      path: disable_summary_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: disable_summary_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<disable_summary_groupsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<disable_summary_groupsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: disable_summary_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: disable_summary_groupsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Disable summary
 *
 * Deprecated, to remove after VICE-5047 gets merged Disables the summary for a
 * discussion topic.
 *
 * Nickname: disable_summary_groups
 */
export async function disable_summary_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/summaries/disable`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
