import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { ePortfolio } from '../../../Resources/EPortfolios.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

export type getSearchParameters = Masquerade;

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
