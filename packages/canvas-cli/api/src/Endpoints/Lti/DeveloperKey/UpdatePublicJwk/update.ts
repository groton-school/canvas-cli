import { JSONObject } from '@battis/typescript-tricks';
import { client } from '../../../../Client.js';
import { DeveloperKey } from '../../../../Resources/DeveloperKeys.js';

export type updateFormParameters = {
  /**
   * The new public jwk that will be set to the tools current public jwk.
   *
   * Json
   */
  public_jwk: JSONObject;
};

type Options =
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    };

/**
 * Update Public JWK
 *
 * Rotate the public key in jwk format when using lti services
 *
 * Nickname: update_public_jwk
 */
export async function update(options: Options) {
  return await client().fetchAs<DeveloperKey>(
    `/api/lti/developer_key/update_public_jwk`,
    {
      method: 'PUT',
      ...options
    }
  );
}
