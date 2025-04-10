import { client } from '../../../../../Client.js';
import { Progress } from '../../../../../Resources/CoursePace.js';

export type bulk_update_assignment_datesPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: bulk_update_assignment_datesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Bulk update assignment dates
 *
 * Update due dates and availability dates for multiple assignments in a course.
 *
 * Accepts a JSON array of objects containing two keys each: +id+, the
 * assignment id, and +all_dates+, an array of +AssignmentDate+ structures
 * containing the base and/or override dates for the assignment, as returned
 * from the {api:AssignmentsApiController#index List assignments} endpoint with
 * +include[]=all_dates+.
 *
 * This endpoint cannot create or destroy assignment overrides; any existing
 * assignment overrides that are not referenced in the arguments will be left
 * alone. If an override is given, any dates that are not supplied with it will
 * be defaulted. To clear a date, specify null explicitly.
 *
 * All referenced assignments will be validated before any are saved. A list of
 * errors will be returned if any provided dates are invalid, and no changes
 * will be saved.
 *
 * The bulk update is performed in a background job, use the
 * {api:ProgressController#show Progress API} to check its status.
 *
 * Nickname: bulk_update_assignment_dates
 */
export async function bulk_update_assignment_dates({ pathParams }: Options) {
  return await client().fetchAs<Progress>(
    `/v1/courses/{course_id}/assignments/bulk_update`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
