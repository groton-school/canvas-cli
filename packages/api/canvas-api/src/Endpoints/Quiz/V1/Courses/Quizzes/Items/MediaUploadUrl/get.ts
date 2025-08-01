import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../../Client.js';

export type getPathParameters = {
  /**
   * No description
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
  /**
   * No description
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  assignment_id: number | string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get items media_upload_url
 *
 * Get a url for uploading media for use in hot-spot question types. See the
 * hot-spot question type in the {Appendix: Question Types} for more details
 * about using this endpoint.
 *
 * Nickname: get_items_media_upload_url
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/media_upload_url`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
