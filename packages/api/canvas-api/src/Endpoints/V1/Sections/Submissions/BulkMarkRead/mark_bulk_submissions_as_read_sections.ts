import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type mark_bulk_submissions_as_read_sectionsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  section_id: string | number;
};

export type mark_bulk_submissions_as_read_sectionsSearchParameters = Masquerade;

export type mark_bulk_submissions_as_read_sectionsFormParameters =
  Masquerade & {
    /** No description */
    submissionIds: string[];
  };

type Options = {
  pathParams: mark_bulk_submissions_as_read_sectionsPathParameters;
} & (
  | {
      searchParams?: Partial<mark_bulk_submissions_as_read_sectionsSearchParameters>;
      params?: Partial<mark_bulk_submissions_as_read_sectionsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_bulk_submissions_as_read_sectionsSearchParameters;
      params: mark_bulk_submissions_as_read_sectionsFormParameters;
      strict: true;
    }
);

/**
 * Mark bulk submissions as read
 *
 * Accepts a string array of submission ids. Loops through and marks each
 * submission as read
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_bulk_submissions_as_read_sections
 */
export async function mark_bulk_submissions_as_read_sections(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/submissions/bulk_mark_read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
