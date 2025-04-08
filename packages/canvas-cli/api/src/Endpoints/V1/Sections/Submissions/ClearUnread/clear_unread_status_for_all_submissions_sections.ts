import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

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
export async function clear_unread_status_for_all_submissions_sections({
  parameters
}: Options) {
  return await client().fetchAs<void>(
    `/v1/sections/{section_id}/submissions/{user_id}/clear_unread`,
    { method: 'PUT', params: parameters }
  );
}
