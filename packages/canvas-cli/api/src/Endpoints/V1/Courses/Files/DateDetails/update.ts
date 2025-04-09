import { client } from '../../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  attachment_id: string;
};

export type updateFormParameters = {
  /**
   * The learning object's due date. Not applicable for ungraded discussions,
   * pages, and files.
   *
   * Format: date-time
   */
  due_at: string;
  /**
   * The learning object's unlock date. Must be before the due date if there
   * is one.
   *
   * Format: date-time
   */
  unlock_at: string;
  /**
   * The learning object's lock date. Must be after the due date if there is
   * one.
   *
   * Format: date-time
   */
  lock_at: string;
  /**
   * Whether the learning object is only assigned to students who are targeted
   * by an override.
   */
  only_visible_to_overrides: boolean;
  /**
   * List of overrides to apply to the learning object. Overrides that already
   * exist should include an ID and will be updated if needed. New overrides
   * will be created for overrides in the list without an ID. Overrides not
   * included in the list will be deleted. Providing an empty list will delete
   * all of the object's overrides. Keys for each override object can include:
   * 'id', 'title', 'due_at', 'unlock_at', 'lock_at', 'student_ids', and
   * 'course_section_id', 'course_id', 'noop_id', and 'unassign_item'.
   */
  assignment_overrides: string[];
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update a learning object's date information
 *
 * Updates date-related information for learning objects, including due date,
 * availability dates, override status, and assignment overrides.
 *
 * Returns 204 No Content response code if successful.
 *
 * Nickname: update_learning_object_s_date_information_files
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/files/{attachment_id}/date_details`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
