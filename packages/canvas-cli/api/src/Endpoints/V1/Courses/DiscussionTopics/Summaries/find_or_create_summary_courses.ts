import { client } from '../../../../../Client.js';

export type find_or_create_summary_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

export type find_or_create_summary_coursesFormParameters = {
  /** Areas or topics for the summary to focus on. */
  userInput: string;
};

type Options = {
  pathParams: find_or_create_summary_coursesPathParameters;
} & (
  | {
      params?: Partial<find_or_create_summary_coursesFormParameters>;
      strict?: false;
    }
  | {
      params?: find_or_create_summary_coursesFormParameters;
      strict: true;
    }
);

/**
 * Find or Create Summary
 *
 * Generates a summary for a discussion topic.
 *
 * Nickname: find_or_create_summary_courses
 */
export async function find_or_create_summary_courses({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
