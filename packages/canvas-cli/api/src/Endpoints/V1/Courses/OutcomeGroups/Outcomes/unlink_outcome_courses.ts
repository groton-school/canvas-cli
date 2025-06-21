import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

export type unlink_outcome_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
  /** ID */
  outcome_id: string;
};

export type unlink_outcome_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: unlink_outcome_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<unlink_outcome_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: unlink_outcome_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Unlink an outcome
 *
 * Unlinking an outcome only deletes the outcome itself if this was the last
 * link to the outcome in any group in any context. Aligned outcomes cannot be
 * deleted; as such, if this is the last link to an aligned outcome, the
 * unlinking will fail.
 *
 * Nickname: unlink_outcome_courses
 */
export async function unlink_outcome_courses(options: Options) {
  const response = await client().fetchAs<OutcomeLink>(
    `/api/v1/courses/{course_id}/outcome_groups/{id}/outcomes/{outcome_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
