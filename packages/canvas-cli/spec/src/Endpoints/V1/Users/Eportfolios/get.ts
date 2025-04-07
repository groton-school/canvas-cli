import { ePortfolio } from '../../../../Resources/EPortfolios.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get all ePortfolios for a User
 *
 * Get a list of all ePortfolios for the specified user.
 *
 * Nickname: get_all_eportfolios_for_user
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/users/{user_id}/eportfolios`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
