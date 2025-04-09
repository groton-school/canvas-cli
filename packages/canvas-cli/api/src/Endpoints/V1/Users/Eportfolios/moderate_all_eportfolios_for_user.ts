import { client } from '../../../../Client.js';

type moderate_all_eportfolios_for_userPathParameters = {
  /** ID */
  user_id: string;
};

type moderate_all_eportfolios_for_userFormParameters = {
  /** The spam status for all the ePortfolios */
  spam_status: string;
};

type Options = {
  pathParams: moderate_all_eportfolios_for_userPathParameters;
  params?: moderate_all_eportfolios_for_userFormParameters;
};

/**
 * Moderate all ePortfolios for a User
 *
 * Update the spam_status for all active eportfolios of a user. Only available
 * to admins who can moderate_user_content.
 *
 * Nickname: moderate_all_eportfolios_for_user
 */
export async function moderate_all_eportfolios_for_user({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/eportfolios`, {
    method: 'PUT',
    pathParams,
    params
  });
}
