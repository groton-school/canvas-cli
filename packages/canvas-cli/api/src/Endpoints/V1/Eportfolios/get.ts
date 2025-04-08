import { client } from '../../../Client.js';
import { ePortfolio } from '../../../Resources/EPortfolios.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get an ePortfolio
 *
 * Get details for a single ePortfolio.
 *
 * Nickname: get_eportfolio
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<ePortfolio>(`/v1/eportfolios/{id}`, {
    method: 'GET',
    params: parameters
  });
}
