import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { ePortfolio } from '../../../../Resources/EPortfolios.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Deleted:: Include deleted ePortfolios. Only available to admins who can
     * moderate_user_content.
     */
    include: string[];
  }>;

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
 * Get all ePortfolios for a User
 *
 * Get a list of all ePortfolios for the specified user.
 *
 * Nickname: get_all_eportfolios_for_user
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ePortfolio[]>(
    `/api/v1/users/{user_id}/eportfolios`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
