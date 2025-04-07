import { ePortfolioPage } from '../../../../Resources/EPortfolios.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get ePortfolio Pages
 *
 * Get details for the pages of an ePortfolio
 *
 * Nickname: get_eportfolio_pages
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/eportfolios/{eportfolio_id}/pages`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
