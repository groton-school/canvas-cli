import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { PairingCode } from '../../../../Resources/UserObservees.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type createSearchParameters = Masquerade;

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      strict: true;
    }
);

/**
 * Create observer pairing code
 *
 * If the user is a student, will generate a code to be used with self
 * registration or observees APIs to link another user to this student.
 *
 * Nickname: create_observer_pairing_code
 */
export async function create(options: Options) {
  const response = await client().fetchAs<PairingCode>(
    `/api/v1/users/{user_id}/observer_pairing_codes`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
