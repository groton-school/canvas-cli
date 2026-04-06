import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<createSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {Options.query} */
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
