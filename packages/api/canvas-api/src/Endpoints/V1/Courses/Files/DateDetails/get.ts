import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { LearningObjectDates } from '../../../../../Resources/LearningObjectDates.js';

export type getPathParameters = {
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
  attachment_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * Array of strings indicating what additional data to include in the
     * response. Valid values:
     *
     * - "peer_review": includes peer review sub assignment information and
     *   overrides in the response. Requires the
     *   peer_review_allocation_and_grading feature flag to be enabled.
     * - "child_peer_review_override_dates": each assignment override will include
     *   a peer_review_dates field containing the matched peer review override
     *   data (id, due_at, unlock_at, lock_at) for that override. The field will
     *   be present as null if no matching peer review override exists.
     */
    include: string[];
    /**
     * Array of strings indicating what data to exclude from the response. Valid
     * values:
     *
     * - "peer_review_overrides": when include[]=peer_review is also specified,
     *   the peer_review_sub_assignment object will not include the overrides
     *   array, reducing the response payload size. This is useful when using
     *   include[]=child_peer_review_override_dates since the peer review
     *   override data is already embedded in the parent assignment overrides.
     * - "child_override_due_dates": prevents the sub_assignment_due_dates field
     *   from being included in assignment override responses, even when
     *   discussion checkpoints are enabled. This reduces response payload size
     *   when checkpoint due date information is not needed.
     */
    exclude: string[];
  }>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a learning object's date information
 *
 * Get a learning object's date-related information, including due date,
 * availability dates, override status, and a paginated list of all assignment
 * overrides for the item.
 *
 * Nickname: get_learning_object_s_date_information_files
 */
export async function get(options: Options) {
  const response = await client().fetchAs<LearningObjectDates>(
    `/api/v1/courses/{course_id}/files/{attachment_id}/date_details`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
