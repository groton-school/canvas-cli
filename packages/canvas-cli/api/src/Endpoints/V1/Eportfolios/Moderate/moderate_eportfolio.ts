import { client } from '../../../../Client.js';
import { ePortfolio } from '../../../../Resources/EPortfolios.js';

type moderate_eportfolioPathParameters = {
  /** ID */
  eportfolio_id: string;
};

type moderate_eportfolioFormParameters = {
  /** The spam status for the ePortfolio */
  spam_status: string;
};

type Options = {
  pathParams: moderate_eportfolioPathParameters;
  params?: moderate_eportfolioFormParameters;
};

/**
 * Moderate an ePortfolio
 *
 * Update the spam_status of an eportfolio. Only available to admins who can
 * moderate_user_content.
 *
 * Nickname: moderate_eportfolio
 */
export async function moderate_eportfolio({ pathParams, params }: Options) {
  return await client().fetchAs<ePortfolio>(
    `/v1/eportfolios/{eportfolio_id}/moderate`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
