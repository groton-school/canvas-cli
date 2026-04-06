import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type settingsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type settingsSearchParameters = Masquerade;

type Options = (
  | {
      path: settingsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: settingsPathParameters;
    }
) &
  (
    | {
        query?: Partial<settingsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<settingsSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<settingsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: settingsSearchParameters;
        strict: true;
      }
  );

/**
 * Settings
 *
 * Returns a JSON object containing a subset of settings for the specified
 * account. It's possible an empty set will be returned if no settings are
 * applicable. The caller must be an Account admin with the
 * manage_account_settings permission.
 *
 * Nickname: settings
 */
export async function settings(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/settings`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
