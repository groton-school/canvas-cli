import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

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

type Options = (
  | {
      path: clear_unread_status_for_all_submissions_sectionsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: clear_unread_status_for_all_submissions_sectionsPathParameters;
    }
) &
  (
    | {
        query?: Partial<clear_unread_status_for_all_submissions_sectionsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<clear_unread_status_for_all_submissions_sectionsSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<clear_unread_status_for_all_submissions_sectionsSearchParameters>;
        /** @deprecated Use {Options.query} */
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
