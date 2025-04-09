import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /**
   * The id of the submission the file is associated with. Provide this
   * argument to gain access to a file that has been submitted to an
   * assignment (Canvas will verify that the file belongs to the submission
   * and the calling user has rights to view the submission).
   *
   * Format: 'int64'
   */
  submission_id: number;
};

type Options = {
  pathParams: getPathParameters;
  searchParams?: getSearchParameters;
};

/**
 * Get public inline preview url
 *
 * Determine the URL that should be used for inline preview of the file.
 *
 * Nickname: get_public_inline_preview_url
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/files/{id}/public_url`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
