import { client } from '../../../../../Client.js';
import {
  AssignmentOverride,
  AssignmentOverride
} from '../../../../../Resources/Assignments.js';

type Parameters = {
  /** Attributes for the updated overrides. */
  assignment_overrides: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Batch update overrides in a course
 *
 * Updates a list of specified overrides for each assignment. Handles overrides
 * in a transaction, so either all updates are applied or none. See
 * {api:AssignmentOverridesController#update Update an assignment override} for
 * available attributes.
 *
 * All current overridden values must be supplied if they are to be retained;
 * e.g. if due_at was overridden, but this PUT omits a value for due_at, due_at
 * will no longer be overridden. If the override is adhoc and student_ids is not
 * supplied, the target override set is unchanged. Target override sets cannot
 * be changed for group or section overrides.
 *
 * Errors are reported in an errors attribute, an array of errors corresponding
 * to inputs. Global errors will be reported as a single element errors array
 *
 * Nickname: batch_update_overrides_in_course
 */
export async function batch_update_overrides_in_course({
  parameters
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/overrides`,
    { method: 'PUT', params: parameters }
  );
}
