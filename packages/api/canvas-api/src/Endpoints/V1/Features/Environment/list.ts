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
 * List environment features
 *
 * Return a hash of global feature options that pertain to the Canvas user
 * interface. This is the same information supplied to the web interface as
 * +ENV.FEATURES+.
 *
 * Nickname: list_environment_features
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/features/environment`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
