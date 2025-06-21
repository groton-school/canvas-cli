import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type mark_submission_as_unread_sectionsPathParameters = {
  /** ID */
  section_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
};

export type mark_submission_as_unread_sectionsSearchParameters = Masquerade;

type Options = {
  pathParams: mark_submission_as_unread_sectionsPathParameters;
} & (
  | {
      searchParams?: Partial<mark_submission_as_unread_sectionsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_submission_as_unread_sectionsSearchParameters;
      strict: true;
    }
);

/**
 * Mark submission as unread
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_submission_as_unread_sections
 */
export async function mark_submission_as_unread_sections(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
