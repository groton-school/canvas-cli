import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { ePortfolioPage } from '../../../../Resources/EPortfolios.js';

export type getPathParameters = {
  /** ID */
  eportfolio_id: string;
};

export type getSearchParameters = Paginated;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<ePortfolioPage[]>(
    `/api/v1/eportfolios/{eportfolio_id}/pages`,
    {
      method: 'GET',
      ...options
    }
  );
}
