import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Progress } from '../../../../Resources/CoursePace.js';

export type enroll_multiple_users_to_one_or_more_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type enroll_multiple_users_to_one_or_more_coursesSearchParameters =
  Masquerade;

export type enroll_multiple_users_to_one_or_more_coursesFormParameters =
  Masquerade & {
    /**
     * The user IDs to enroll in the courses.
     *
     * Format: 'int64'
     */
    user_ids: number | string[];
    /**
     * The course IDs to enroll each user in.
     *
     * Format: 'int64'
     */
    course_ids: number | string[];
  };

type Options = {
  pathParams: enroll_multiple_users_to_one_or_more_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<enroll_multiple_users_to_one_or_more_coursesSearchParameters>;
      params?: Partial<enroll_multiple_users_to_one_or_more_coursesFormParameters>;
      strict?: false;
    }
  | {
      searchParams: enroll_multiple_users_to_one_or_more_coursesSearchParameters;
      params: enroll_multiple_users_to_one_or_more_coursesFormParameters;
      strict: true;
    }
);

/**
 * Enroll multiple users to one or more courses
 *
 * Nickname: enroll_multiple_users_to_one_or_more_courses
 */
export async function enroll_multiple_users_to_one_or_more_courses(
  options: Options
) {
  const response = await client().fetchAs<Progress>(
    `/api/v1/accounts/{account_id}/bulk_enrollment`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
