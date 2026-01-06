import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { ContextExternalTool } from '../../../../Resources/ExternalTools.js';

export type updatePathParameters = {
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

export type updateSearchParameters = Masquerade;

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      strict: true;
    }
);

/**
 * Edit an external tool
 *
 * Update the specified external tool. Uses same parameters as create. Returns
 * the updated tool.
 *
 * NOTE: Any updates made to LTI 1.3 tools with this API will be overridden if
 * any changes are made to the tool's associated LTI Registration/Developer Key
 * configuration. In almost all cases, changes should be made to the tool's
 * associated LTI Registration configuration, not individual tools.
 *
 * Nickname: edit_external_tool_courses
 */
export async function update(options: Options) {
  const response = await client().fetchAs<ContextExternalTool>(
    `/api/v1/courses/{course_id}/external_tools/{external_tool_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
