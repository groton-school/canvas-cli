import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

export type import_outcome_group_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type import_outcome_group_coursesSearchParameters = Masquerade;

export type import_outcome_group_coursesFormParameters = Masquerade & {
  /**
   * The ID of the source outcome group.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  source_outcome_group_id: number | string;
  /**
   * If true, perform action asynchronously. In that case, this endpoint will
   * return a Progress object instead of an OutcomeGroup. Use the
   * {api:ProgressController#show progress endpoint} to query the status of
   * the operation. The imported outcome group id and url will be returned in
   * the results of the Progress object as "outcome_group_id" and
   * "outcome_group_url"
   *
   * Type: boolean
   */
  async: boolean | string;
};

type Options = {
  pathParams: import_outcome_group_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<import_outcome_group_coursesSearchParameters>;
      params?: Partial<import_outcome_group_coursesFormParameters>;
      strict?: false;
    }
  | {
      searchParams: import_outcome_group_coursesSearchParameters;
      params: import_outcome_group_coursesFormParameters;
      strict: true;
    }
);

/**
 * Import an outcome group
 *
 * Creates a new subgroup of the outcome group with the same title and
 * description as the source group, then creates links in that new subgroup to
 * the same outcomes that are linked in the source group. Recurses on the
 * subgroups of the source group, importing them each in turn into the new
 * subgroup.
 *
 * Allows you to copy organizational structure, but does not create copies of
 * the outcomes themselves, only new links.
 *
 * The source group must be either global, from the same context as this outcome
 * group, or from an associated account. The source group cannot be the root
 * outcome group of its context.
 *
 * Nickname: import_outcome_group_courses
 */
export async function import_outcome_group_courses(options: Options) {
  const response = await client().fetchAs<OutcomeGroup>(
    `/api/v1/courses/{course_id}/outcome_groups/{id}/import`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
