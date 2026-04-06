import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type listSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: listSearchParameters;
        }
      | {
          /** @deprecated Use {Options.query} */
          searchParams: listSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * List environment settings
 *
 * Return a hash of global settings for the root account This is the same
 * information supplied to the web interface as +ENV.SETTINGS+.
 *
 * Nickname: list_environment_settings
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/settings/environment`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
