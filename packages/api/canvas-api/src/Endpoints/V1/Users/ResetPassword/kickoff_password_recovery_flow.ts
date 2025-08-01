import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type kickoff_password_recovery_flowSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<kickoff_password_recovery_flowSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: kickoff_password_recovery_flowSearchParameters;
      strict: true;
    };

/**
 * Kickoff password recovery flow
 *
 * Given a user email, generate a nonce and email it to the user
 *
 * Nickname: kickoff_password_recovery_flow
 */
export async function kickoff_password_recovery_flow(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/reset_password`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
