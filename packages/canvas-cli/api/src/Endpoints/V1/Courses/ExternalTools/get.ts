import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  external_tool_id: string;
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
 * Get a single external tool
 *
 * Returns the specified external tool.
 *
 * Nickname: get_single_external_tool_courses
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/external_tools/{external_tool_id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
