import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ContextExternalTool } from '../../../../Resources/ExternalTools.js';

export type getPathParameters = {
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

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: getSearchParameters;
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
export async function get(options: Options) {
  const response = await client().fetchAs<ContextExternalTool>(
    `/api/v1/courses/{course_id}/external_tools/{external_tool_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
