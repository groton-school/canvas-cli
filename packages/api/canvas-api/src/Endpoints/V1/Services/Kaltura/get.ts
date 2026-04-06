import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type getSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<getSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: getSearchParameters;
        }
      | {
          /** @deprecated Use {Options.query} */
          searchParams: getSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * Get Kaltura config
 *
 * Return the config information for the Kaltura plugin in json format.
 *
 * Nickname: get_kaltura_config
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/services/kaltura`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
