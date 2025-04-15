import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get current settings for account or course
 *
 * Update multiple modules in an account.
 *
 * Nickname: get_current_settings_for_account_or_course_courses
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/csp_settings`,
    {
      method: 'GET',
      ...options
    }
  );
}
