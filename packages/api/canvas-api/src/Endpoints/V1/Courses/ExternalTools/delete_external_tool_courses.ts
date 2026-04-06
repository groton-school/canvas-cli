import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ContextExternalTool } from '../../../../Resources/ExternalTools.js';

export type delete_external_tool_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  external_tool_id: string | number;
};

export type delete_external_tool_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_external_tool_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_external_tool_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_external_tool_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_external_tool_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_external_tool_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_external_tool_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete an external tool
 *
 * Remove the specified external tool
 *
 * Nickname: delete_external_tool_courses
 */
export async function delete_external_tool_courses(options: Options) {
  const response = await client().fetchAs<ContextExternalTool>(
    `/api/v1/courses/{course_id}/external_tools/{external_tool_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
