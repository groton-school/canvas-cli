import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type find_or_create_summary_coursesPathParameters = {
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

export type find_or_create_summary_coursesSearchParameters = Masquerade;

export type find_or_create_summary_coursesFormParameters = Masquerade & {
  /** Areas or topics for the summary to focus on. */
  userInput: string;
};

type Options = {
  pathParams: find_or_create_summary_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<find_or_create_summary_coursesSearchParameters>;
      params?: Partial<find_or_create_summary_coursesFormParameters>;
      strict?: false;
    }
  | {
      searchParams: find_or_create_summary_coursesSearchParameters;
      params: find_or_create_summary_coursesFormParameters;
      strict: true;
    }
);

/**
 * Find or Create Summary
 *
 * Generates a summary for a discussion topic. Returns the summary text and
 * usage information.
 *
 * Nickname: find_or_create_summary_courses
 */
export async function find_or_create_summary_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
