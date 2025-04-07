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
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{user_id}/temporary_enrollment_status`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
