import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ePortfolioPage } from '../../../../Resources/EPortfolios.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  eportfolio_id: string | number;
};

export type getSearchParameters = Masquerade & Paginated;

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
 * Get ePortfolio Pages
 *
 * Get details for the pages of an ePortfolio
 *
 * Nickname: get_eportfolio_pages
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ePortfolioPage[]>(
    `/api/v1/eportfolios/{eportfolio_id}/pages`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
