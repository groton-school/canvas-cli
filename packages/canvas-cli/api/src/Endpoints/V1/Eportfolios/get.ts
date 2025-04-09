import { client } from '../../../Client.js';
import { ePortfolio } from '../../../Resources/EPortfolios.js';

type getPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get an ePortfolio
 *
 * Get details for a single ePortfolio.
 *
 * Nickname: get_eportfolio
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<ePortfolio>(`/v1/eportfolios/{id}`, {
    method: 'GET',
    pathParams
  });
}
