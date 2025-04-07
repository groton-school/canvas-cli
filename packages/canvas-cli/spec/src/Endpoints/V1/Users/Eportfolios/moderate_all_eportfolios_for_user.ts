type Parameters = {
  /** The spam status for all the ePortfolios */
  spam_status: string;
};

type Options = {
  parameters: Parameters;
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
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{user_id}/eportfolios`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
