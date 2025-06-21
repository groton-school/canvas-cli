import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * The id of the submission the file is associated with. Provide this
     * argument to gain access to a file that has been submitted to an
     * assignment (Canvas will verify that the file belongs to the submission
     * and the calling user has rights to view the submission).
     *
     * Format: 'int64'
     */
    submission_id: number;
  }>;

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
 * Get public inline preview url
 *
 * Determine the URL that should be used for inline preview of the file.
 *
 * Nickname: get_public_inline_preview_url
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/files/{id}/public_url`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
