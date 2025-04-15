import { client } from '../../../../../../Client.js';

export type rate_entry_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  entry_id: string;
};

export type rate_entry_coursesFormParameters = {
  /**
   * A rating to set on this entry. Only 0 and 1 are accepted.
   *
   * Format: 'int64'
   */
  rating: number;
};

type Options = {
  pathParams: rate_entry_coursesPathParameters;
} & (
  | {
      params?: Partial<rate_entry_coursesFormParameters>;
      strict?: false;
    }
  | {
      params: rate_entry_coursesFormParameters;
      strict: true;
    }
);

/**
 * Rate entry
 *
 * Rate a discussion entry.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: rate_entry_courses
 */
export async function rate_entry_courses(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating`,
    {
      method: 'POST',
      ...options
    }
  );
}
