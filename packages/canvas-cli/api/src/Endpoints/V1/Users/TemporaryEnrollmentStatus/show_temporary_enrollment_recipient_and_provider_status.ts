import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show Temporary Enrollment recipient and provider status
 *
 * Returns a JSON Object containing the temporary enrollment status for a user.
 *
 * Nickname: show_temporary_enrollment_recipient_and_provider_status
 */
export async function show_temporary_enrollment_recipient_and_provider_status({
  parameters
}: Options) {
  return await client().fetchAs<void>(
    `/v1/users/{user_id}/temporary_enrollment_status`,
    { method: 'GET', params: parameters }
  );
}
