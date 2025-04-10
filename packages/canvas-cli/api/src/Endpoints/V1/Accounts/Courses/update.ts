import { client } from '../../../../Client.js';
import { Progress } from '../../../../Resources/CoursePace.js';

export type updatePathParameters = {
  /** ID */
  account_id: string;
};

export type updateFormParameters = {
  /**
   * List of ids of courses to update. At most 500 courses may be updated in
   * one call.
   */
  course_ids: string[];
  /**
   * The action to take on each course. Must be one of 'offer', 'conclude',
   * 'delete', or 'undelete'. 'offer' makes a course visible to students. This
   * action is also called "publish" on the web site. 'conclude' prevents
   * future enrollments and makes a course read-only for all participants. The
   * course still appears in prior-enrollment lists. 'delete' completely
   * removes the course from the web site (including course menus and
   * prior-enrollment lists). All enrollments are deleted. Course content may
   * be physically deleted at a future date. 'undelete' attempts to recover a
   * course that has been deleted. (Recovery is not guaranteed; please
   * conclude rather than delete a course if there is any possibility the
   * course will be used again.) The recovered course will be unpublished.
   * Deleted enrollments will not be recovered.
   */
  event: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update courses
 *
 * Update multiple courses in an account. Operates asynchronously; use the
 * {api:ProgressController#show progress endpoint} to query the status of an
 * operation.
 *
 * Nickname: update_courses
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<Progress>(`/v1/accounts/{account_id}/courses`, {
    method: 'PUT',
    pathParams,
    params
  });
}
