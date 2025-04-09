import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

type show_outcome_group_globalPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_outcome_group_globalPathParameters;
};

/**
 * Show an outcome group
 *
 * Nickname: show_outcome_group_global
 */
export async function show_outcome_group_global({ pathParams }: Options) {
  return await client().fetchAs<OutcomeGroup>(
    `/v1/global/outcome_groups/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
