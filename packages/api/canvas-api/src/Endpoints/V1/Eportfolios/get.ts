import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { ePortfolio } from '../../../Resources/EPortfolios.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
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
      })
  );

/**
 * Get an ePortfolio
 *
 * Get details for a single ePortfolio.
 *
 * nickname: get_eportfolio
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ePortfolio>(
    `/api/v1/eportfolios/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
