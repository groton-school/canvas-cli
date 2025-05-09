import { client } from '../../../../Client.js';

export type moderate_all_eportfolios_for_userPathParameters = {
  /** ID */
  user_id: string;
};

export type moderate_all_eportfolios_for_userFormParameters = {
  /** The spam status for all the ePortfolios */
  spam_status: string;
};

type Options = {
  pathParams: moderate_all_eportfolios_for_userPathParameters;
} & (
  | {
      params?: Partial<moderate_all_eportfolios_for_userFormParameters>;
      strict?: false;
    }
  | {
      params: moderate_all_eportfolios_for_userFormParameters;
      strict: true;
    }
);

/**
 * Moderate all ePortfolios for a User
 *
 * Update the spam_status for all active eportfolios of a user. Only available
 * to admins who can moderate_user_content.
 *
 * Nickname: moderate_all_eportfolios_for_user
 */
export async function moderate_all_eportfolios_for_user(options: Options) {
  return await client().fetchAs<void>(`/api/v1/users/{user_id}/eportfolios`, {
    method: 'PUT',
    ...options
  });
}
