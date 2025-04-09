import { client } from '../../../../Client.js';
import { GradingStandard } from '../../../../Resources/GradingStandards.js';

type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  grading_standard_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a single grading standard in a context.
 *
 * Returns a grading standard for the given context that is visible to the user.
 *
 * Nickname: get_single_grading_standard_in_context_accounts
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<GradingStandard>(
    `/v1/accounts/{account_id}/grading_standards/{grading_standard_id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
