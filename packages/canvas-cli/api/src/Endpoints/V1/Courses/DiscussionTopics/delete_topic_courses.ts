import { client } from '../../../../Client.js';

export type delete_topic_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: delete_topic_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a topic
 *
 * Deletes the discussion topic. This will also delete the assignment, if it's
 * an assignment discussion.
 *
 * Nickname: delete_topic_courses
 */
export async function delete_topic_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
