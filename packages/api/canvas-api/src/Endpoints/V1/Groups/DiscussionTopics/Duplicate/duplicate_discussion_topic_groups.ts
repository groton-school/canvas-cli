import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { DiscussionTopic } from '../../../../../Resources/DiscussionTopics.js';

export type duplicate_discussion_topic_groupsPathParameters = {
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
};

export type duplicate_discussion_topic_groupsSearchParameters = Masquerade;

type Options = (
  | {
      path: duplicate_discussion_topic_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: duplicate_discussion_topic_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<duplicate_discussion_topic_groupsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<duplicate_discussion_topic_groupsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: duplicate_discussion_topic_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: duplicate_discussion_topic_groupsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Duplicate discussion topic
 *
 * Duplicate a discussion topic according to context (Course/Group)
 *
 * nickname: duplicate_discussion_topic_groups
 *
 *
 *
 *
 */
export async function duplicate_discussion_topic_groups(options: Options) {
  const response = await client().fetchAs<DiscussionTopic>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/duplicate`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
