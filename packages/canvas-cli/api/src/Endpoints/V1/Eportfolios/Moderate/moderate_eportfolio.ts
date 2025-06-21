import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { ePortfolio } from '../../../../Resources/EPortfolios.js';

export type moderate_eportfolioPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  eportfolio_id: string | number;
};

export type moderate_eportfolioSearchParameters = Masquerade;

export type moderate_eportfolioFormParameters = Masquerade & {
  /** The spam status for the ePortfolio */
  spam_status: string;
};

type Options = {
  pathParams: moderate_eportfolioPathParameters;
} & (
  | {
      searchParams?: Partial<moderate_eportfolioSearchParameters>;
      params?: Partial<moderate_eportfolioFormParameters>;
      strict?: false;
    }
  | {
      searchParams: moderate_eportfolioSearchParameters;
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
