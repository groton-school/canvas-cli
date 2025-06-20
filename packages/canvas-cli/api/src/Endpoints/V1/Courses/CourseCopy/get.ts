import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
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
 * Get course copy status
 *
 * DEPRECATED: Please use the {api:ContentMigrationsController#create Content
 * Migrations API}
 *
 * Retrieve the status of a course copy
 *
 * Nickname: get_course_copy_status
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/course_copy/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
