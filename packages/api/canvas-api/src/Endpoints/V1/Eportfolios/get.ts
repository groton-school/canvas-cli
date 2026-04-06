import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ePortfolio } from '../../../Resources/EPortfolios.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: getSearchParameters;
        strict: true;
      }
  );

/**
 * Get an ePortfolio
 *
 * Get details for a single ePortfolio.
 *
 * Nickname: get_eportfolio
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
