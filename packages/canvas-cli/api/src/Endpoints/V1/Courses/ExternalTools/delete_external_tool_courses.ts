import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type delete_external_tool_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  external_tool_id: string;
};

export type delete_external_tool_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: delete_external_tool_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<delete_external_tool_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_external_tool_coursesSearchParameters;
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
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/external_tools/{external_tool_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
