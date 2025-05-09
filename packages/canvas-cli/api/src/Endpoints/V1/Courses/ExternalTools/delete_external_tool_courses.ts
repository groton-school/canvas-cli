import { client } from '../../../../Client.js';

export type delete_external_tool_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  external_tool_id: string;
};

type Options = {
  pathParams: delete_external_tool_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete an external tool
 *
 * Remove the specified external tool
 *
 * Nickname: delete_external_tool_courses
 */
export async function delete_external_tool_courses(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/external_tools/{external_tool_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
