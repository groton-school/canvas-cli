import { client } from '../../../../Client.js';
import { ePortfolio } from '../../../../Resources/EPortfolios.js';

export type moderate_eportfolioPathParameters = {
  /** ID */
  eportfolio_id: string;
};

export type moderate_eportfolioFormParameters = {
  /** The spam status for the ePortfolio */
  spam_status: string;
};

type Options = {
  pathParams: moderate_eportfolioPathParameters;
} & (
  | {
      params?: Partial<moderate_eportfolioFormParameters>;
      strict?: false;
    }
  | {
      params: moderate_eportfolioFormParameters;
      strict: true;
    }
);

/**
 * Moderate an ePortfolio
 *
 * Update the spam_status of an eportfolio. Only available to admins who can
 * moderate_user_content.
 *
 * Nickname: moderate_eportfolio
 */
export async function moderate_eportfolio(options: Options) {
  const response = await client().fetchAs<ePortfolio>(
    `/api/v1/eportfolios/{eportfolio_id}/moderate`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
