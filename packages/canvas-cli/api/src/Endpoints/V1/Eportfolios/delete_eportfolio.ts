import { client } from '../../../Client.js';
import { ePortfolio } from '../../../Resources/EPortfolios.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete an ePortfolio
 *
 * Mark an ePortfolio as deleted.
 *
 * Nickname: delete_eportfolio
 */
export async function delete_eportfolio({ parameters }: Options) {
  return await client().fetchAs<ePortfolio>(`/v1/eportfolios/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
