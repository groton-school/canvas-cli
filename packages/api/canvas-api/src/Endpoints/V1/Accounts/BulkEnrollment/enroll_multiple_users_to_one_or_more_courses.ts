import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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
    /**
     * Enroll each user as a student, teacher, TA, observer, or designer. If no
     * value is given, the type will be 'StudentEnrollment'.
     */
    enrollment_type: string;
  };

type Options = (
  | {
      path: enroll_multiple_users_to_one_or_more_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: enroll_multiple_users_to_one_or_more_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<enroll_multiple_users_to_one_or_more_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<enroll_multiple_users_to_one_or_more_coursesSearchParameters>;
        body?: Partial<enroll_multiple_users_to_one_or_more_coursesFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<enroll_multiple_users_to_one_or_more_coursesFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<enroll_multiple_users_to_one_or_more_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: enroll_multiple_users_to_one_or_more_coursesSearchParameters;
        body?: Partial<enroll_multiple_users_to_one_or_more_coursesFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: enroll_multiple_users_to_one_or_more_coursesFormParameters;
        strict: true;
      }
  );

/**
 * Enroll multiple users to one or more courses
 *
 * Enrolls multiple users in one or more courses in a single operation.
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
