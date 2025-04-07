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
export async function delete_eportfolio({
  parameters
}: Options): Promise<ePortfolio> {
  return await (
    await fetch(`/v1/eportfolios/{id}`, { method: 'DELETE', body: parameters })
  ).json();
}
