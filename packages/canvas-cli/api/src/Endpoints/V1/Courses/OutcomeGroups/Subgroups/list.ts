import { client } from '../../../../../Client.js';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List subgroups
 *
 * A paginated list of the immediate OutcomeGroup children of the outcome group.
 *
 * Nickname: list_subgroups_courses
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/outcome_groups/{id}/subgroups`,
    {
      method: 'GET',
      pathParams
    }
  );
}
