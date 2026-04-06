import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { DiscussionTopic } from '../../../../../Resources/DiscussionTopics.js';

export type duplicate_discussion_topic_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  topic_id: string | number;
};

export type duplicate_discussion_topic_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: duplicate_discussion_topic_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: duplicate_discussion_topic_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<duplicate_discussion_topic_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<duplicate_discussion_topic_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: duplicate_discussion_topic_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: duplicate_discussion_topic_coursesSearchParameters;
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
 * Nickname: duplicate_discussion_topic_courses
 */
export async function duplicate_discussion_topic_courses(options: Options) {
  const response = await client().fetchAs<DiscussionTopic>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/duplicate`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
