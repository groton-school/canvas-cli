import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  external_tool_id: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Edit an external tool
 *
 * Update the specified external tool. Uses same parameters as create
 *
 * Nickname: edit_external_tool_courses
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/external_tools/{external_tool_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
