import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type clear_unread_status_for_all_submissions_sectionsPathParameters = {
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
  user_id: string | number;
};

export type clear_unread_status_for_all_submissions_sectionsSearchParameters =
  Masquerade;

type Options = {
  pathParams: clear_unread_status_for_all_submissions_sectionsPathParameters;
} & (
  | {
      searchParams?: Partial<clear_unread_status_for_all_submissions_sectionsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: clear_unread_status_for_all_submissions_sectionsSearchParameters;
      strict: true;
    }
);

/**
 * Clear unread status for all submissions.
 *
 * Site-admin-only endpoint.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: clear_unread_status_for_all_submissions_sections
 */
export async function clear_unread_status_for_all_submissions_sections(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/sections/{section_id}/submissions/{user_id}/clear_unread`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
