import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
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

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
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
