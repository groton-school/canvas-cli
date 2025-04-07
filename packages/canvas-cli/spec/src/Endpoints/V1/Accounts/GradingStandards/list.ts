import { GradingStandard } from '../../../../Resources/GradingStandards.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List the grading standards available in a context.
 *
 * Returns the paginated list of grading standards for the given context that
 * are visible to the user.
 *
 * Nickname: list_grading_standards_available_in_context_accounts
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/grading_standards`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
