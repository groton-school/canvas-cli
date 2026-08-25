import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type getSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<getSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: getSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
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
 * nickname: get_kaltura_config
 *
 *
 *
 *
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
