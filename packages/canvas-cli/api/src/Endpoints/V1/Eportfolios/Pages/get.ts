import { client } from '../../../../Client.js';
import { ePortfolioPage } from '../../../../Resources/EPortfolios.js';

export type getPathParameters = {
  /** ID */
  eportfolio_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get ePortfolio Pages
 *
 * Get details for the pages of an ePortfolio
 *
 * Nickname: get_eportfolio_pages
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/eportfolios/{eportfolio_id}/pages`,
    {
      method: 'GET',
      pathParams
    }
  );
}
