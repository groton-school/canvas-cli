import { client } from '../../../../../../../Client.js';

type getPathParameters = {
  /**
   * No description
   *
   * Format: 'int64'
   */
  course_id: number;
  /**
   * No description
   *
   * Format: 'int64'
   */
  assignment_id: number;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get items media_upload_url
 *
 * Get a url for uploading media for use in hot-spot question types. See the
 * hot-spot question type in the {Appendix: Question Types} for more details
 * about using this endpoint.
 *
 * Nickname: get_items_media_upload_url
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/media_upload_url`,
    {
      method: 'GET',
      pathParams
    }
  );
}
