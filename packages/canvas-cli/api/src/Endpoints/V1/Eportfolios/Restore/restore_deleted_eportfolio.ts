import { client } from '../../../../Client.js';
import { ePortfolio } from '../../../../Resources/EPortfolios.js';

type restore_deleted_eportfolioPathParameters = {
  /** ID */
  eportfolio_id: string;
};

type Options = {
  pathParams: restore_deleted_eportfolioPathParameters;
};

/**
 * Restore a deleted ePortfolio
 *
 * Restore an ePortfolio back to active that was previously deleted. Only
 * available to admins who can moderate_user_content.
 *
 * Nickname: restore_deleted_eportfolio
 */
export async function restore_deleted_eportfolio({ pathParams }: Options) {
  return await client().fetchAs<ePortfolio>(
    `/v1/eportfolios/{eportfolio_id}/restore`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
