type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Kickoff password recovery flow
 *
 * Given a user email, generate a nonce and email it to the user
 *
 * Nickname: kickoff_password_recovery_flow
 */
export async function kickoff_password_recovery_flow({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/reset_password`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
