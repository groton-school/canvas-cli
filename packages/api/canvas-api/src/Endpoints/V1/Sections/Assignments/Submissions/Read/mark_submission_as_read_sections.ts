import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type mark_submission_as_read_sectionsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  section_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type mark_submission_as_read_sectionsSearchParameters = Masquerade;

type Options = {
  pathParams: mark_submission_as_read_sectionsPathParameters;
} & (
  | {
      searchParams?: Partial<mark_submission_as_read_sectionsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_submission_as_read_sectionsSearchParameters;
      strict: true;
    }
);

/**
 * Mark submission as read
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_submission_as_read_sections
 */
export async function mark_submission_as_read_sections(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
