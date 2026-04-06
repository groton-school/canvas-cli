import { client, Masquerade } from '#client';
import { JSONObject } from '@battis/typescript-tricks';
import { DeveloperKey } from '../../../../Resources/DeveloperKeys.js';

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The new public jwk that will be set to the tools current public jwk.
   *
   * Json
   */
  public_jwk: JSONObject;
};

type Options =
  | {
      query?: Partial<updateSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<updateSearchParameters>;
      body?: Partial<updateFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | ((
      | {
          query: updateSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: updateSearchParameters;
        }
    ) &
      (
        | {
            body: updateFormParameters;
          }
        | {
            /** @deprecated Use {@link Options.body} */
            params: updateFormParameters;
          }
      ) & {
        strict: true;
      });

/**
 * Update Public JWK
 *
 * Rotate the public key in jwk format when using lti services
 *
 * Nickname: update_public_jwk
 */
export async function update(options: Options) {
  const response = await client().fetchAs<DeveloperKey>(
    `/api/lti/developer_key/update_public_jwk`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
