import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { ePortfolio } from '../../../../Resources/EPortfolios.js';

export type restore_deleted_eportfolioPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  eportfolio_id: string | number;
};

export type restore_deleted_eportfolioSearchParameters = Masquerade;

type Options = {
  pathParams: restore_deleted_eportfolioPathParameters;
} & (
  | {
      searchParams?: Partial<restore_deleted_eportfolioSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: restore_deleted_eportfolioSearchParameters;
      strict: true;
    }
);

/**
 * Restore a deleted ePortfolio
 *
 * Restore an ePortfolio back to active that was previously deleted. Only
 * available to admins who can moderate_user_content.
 *
 * Nickname: restore_deleted_eportfolio
 */
export async function restore_deleted_eportfolio(options: Options) {
  const response = await client().fetchAs<ePortfolio>(
    `/api/v1/eportfolios/{eportfolio_id}/restore`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
