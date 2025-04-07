import { JSONObject } from '@battis/typescript-tricks';
import { DeveloperKey } from '../../../../Resources/DeveloperKeys.js';

type Parameters = {
  /** The new public jwk that will be set to the tools current public jwk. */
  public_jwk: JSONObject;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update Public JWK
 *
 * Rotate the public key in jwk format when using lti services
 *
 * Nickname: update_public_jwk
 */
export async function update({ parameters }: Options): Promise<DeveloperKey> {
  return await (
    await fetch(`/lti/developer_key/update_public_jwk`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
