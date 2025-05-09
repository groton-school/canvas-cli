import { client } from '../../../../../Client.js';

export type mark_bulk_submissions_as_read_sectionsPathParameters = {
  /** ID */
  section_id: string;
};

export type mark_bulk_submissions_as_read_sectionsFormParameters = {
  /** No description */
  submissionIds: string[];
};

type Options = {
  pathParams: mark_bulk_submissions_as_read_sectionsPathParameters;
} & (
  | {
      params?: Partial<mark_bulk_submissions_as_read_sectionsFormParameters>;
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/submissions/bulk_mark_read`,
    {
      method: 'PUT',
      ...options
    }
  );
}
