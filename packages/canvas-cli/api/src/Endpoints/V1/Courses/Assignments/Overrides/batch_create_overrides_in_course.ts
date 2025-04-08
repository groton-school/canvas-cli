import { client } from '../../../../../Client.js';
import {
  AssignmentOverride,
  AssignmentOverride
} from '../../../../../Resources/Assignments.js';

type Parameters = {
  /**
   * Attributes for the new assignment overrides. See
   * {api:AssignmentOverridesController#create Create an assignment override}
   * for available attributes
   */
  assignment_overrides: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Batch create overrides in a course
 *
 * Creates the specified overrides for each assignment. Handles creation in a
 * transaction, so all records are created or none are.
 *
 * One of student_ids, group_id, or course_section_id must be present. At most
 * one should be present; if multiple are present only the most specific
 * (student_ids first, then group_id, then course_section_id) is used and any
 * others are ignored.
 *
 * Errors are reported in an errors attribute, an array of errors corresponding
 * to inputs. Global errors will be reported as a single element errors array
 *
 * Nickname: batch_create_overrides_in_course
 */
export async function batch_create_overrides_in_course({
  parameters
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/overrides`,
    { method: 'POST', params: parameters }
  );
}
