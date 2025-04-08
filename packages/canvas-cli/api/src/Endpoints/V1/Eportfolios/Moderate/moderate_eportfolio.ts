import { client } from '../../../../Client.js';
import { ePortfolio } from '../../../../Resources/EPortfolios.js';

type Parameters = {
  /** The spam status for the ePortfolio */
  spam_status: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Moderate an ePortfolio
 *
 * Update the spam_status of an eportfolio. Only available to admins who can
 * moderate_user_content.
 *
 * Nickname: moderate_eportfolio
 */
export async function moderate_eportfolio({ parameters }: Options) {
  return await client().fetchAs<ePortfolio>(
    `/v1/eportfolios/{eportfolio_id}/moderate`,
    { method: 'PUT', params: parameters }
  );
}
