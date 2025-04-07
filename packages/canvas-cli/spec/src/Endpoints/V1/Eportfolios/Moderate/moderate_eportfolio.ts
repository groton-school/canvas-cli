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
export async function moderate_eportfolio({
  parameters
}: Options): Promise<ePortfolio> {
  return await (
    await fetch(`/v1/eportfolios/{eportfolio_id}/moderate`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
