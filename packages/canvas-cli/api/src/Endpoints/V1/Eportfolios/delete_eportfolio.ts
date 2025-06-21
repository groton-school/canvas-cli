import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { ePortfolio } from '../../../Resources/EPortfolios.js';

export type delete_eportfolioPathParameters = {
  /** ID */
  id: string;
};

export type delete_eportfolioSearchParameters = Masquerade;

type Options = {
  pathParams: delete_eportfolioPathParameters;
} & (
  | {
      searchParams?: Partial<delete_eportfolioSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_eportfolioSearchParameters;
      strict: true;
    }
);

/**
 * Delete an ePortfolio
 *
 * Mark an ePortfolio as deleted.
 *
 * Nickname: delete_eportfolio
 */
export async function delete_eportfolio(options: Options) {
  const response = await client().fetchAs<ePortfolio>(
    `/api/v1/eportfolios/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
