import { client } from '../../../../Client.js';

export type edit_external_tool_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  external_tool_id: string;
};

type Options = {
  pathParams: edit_external_tool_coursesPathParameters;
};

/**
 * Edit an external tool
 *
 * Update the specified external tool. Uses same parameters as create
 *
 * Nickname: edit_external_tool_courses
 */
export async function edit_external_tool_courses({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/external_tools/{external_tool_id}`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
