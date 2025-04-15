import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { ePortfolio } from '../../../../Resources/EPortfolios.js';

export type getPathParameters = {
  /** ID */
  user_id: string;
};

export type getSearchParameters = {
  /**
   * Deleted:: Include deleted ePortfolios. Only available to admins who can
   * moderate_user_content.
   */
  include: string[];
} & Paginated;

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
  return await client().fetchAs<ePortfolio[]>(
    `/api/v1/users/{user_id}/eportfolios`,
    {
      method: 'GET',
      ...options
    }
  );
}
