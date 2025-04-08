import { client } from '../../../../Client.js';
import { PairingCode } from '../../../../Resources/UserObservees.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Create observer pairing code
 *
 * If the user is a student, will generate a code to be used with self
 * registration or observees APIs to link another user to this student.
 *
 * Nickname: create_observer_pairing_code
 */
export async function create({ parameters }: Options) {
  return await client().fetchAs<PairingCode>(
    `/v1/users/{user_id}/observer_pairing_codes`,
    { method: 'POST', params: parameters }
  );
}
