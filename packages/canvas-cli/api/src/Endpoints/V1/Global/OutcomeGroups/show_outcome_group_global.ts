import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type show_outcome_group_globalPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_outcome_group_globalPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show an outcome group
 *
 * Nickname: show_outcome_group_global
 */
export async function show_outcome_group_global(options: Options) {
  const response = await client().fetchAs<OutcomeGroup>(
    `/api/v1/global/outcome_groups/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
