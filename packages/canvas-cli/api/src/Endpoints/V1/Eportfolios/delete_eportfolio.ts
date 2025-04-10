import { client } from '../../../Client.js';
import { ePortfolio } from '../../../Resources/EPortfolios.js';

export type delete_eportfolioPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_eportfolioPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function delete_eportfolio({ pathParams }: Options) {
  return await client().fetchAs<ePortfolio>(`/v1/eportfolios/{id}`, {
    method: 'DELETE',
    pathParams
  });
}
