import { client } from '../../../../Client.js';

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
export async function kickoff_password_recovery_flow({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/reset_password`, {
    method: 'POST',
    params: parameters
  });
}
