import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type mark_submission_item_as_read_sectionsPathParameters = {
  /** ID */
  section_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
  /** ID */
  item: string;
};

export type mark_submission_item_as_read_sectionsSearchParameters = Masquerade;

type Options = {
  pathParams: mark_submission_item_as_read_sectionsPathParameters;
} & (
  | {
      searchParams?: Partial<mark_submission_item_as_read_sectionsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_submission_item_as_read_sectionsSearchParameters;
      strict: true;
    }
);

/**
 * Mark submission item as read
 *
 * No request fields are necessary.
 *
 * A submission item can be "grade", "comment" or "rubric"
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_submission_item_as_read_sections
 */
export async function mark_submission_item_as_read_sections(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read/{item}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
