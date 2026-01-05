import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /** The external id of the tool to launch. */
    id: string;
    /** The LTI launch url for the external tool. */
    url: string;
    /**
     * The assignment id for an assignment launch. Required if launch_type is
     * set to "assessment".
     */
    assignment_id: string;
    /**
     * The assignment id for a module item launch. Required if launch_type is
     * set to "module_item".
     */
    module_item_id: string;
    /**
     * The type of launch to perform on the external tool. Placement names (eg.
     * "course_navigation") can also be specified to use the custom launch url
     * for that placement; if done, the tool id must be provided.
     */
    launch_type: string;
    /** The identifier to lookup a resource link. */
    resource_link_lookup_uuid: string;
  }>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a sessionless launch url for an external tool.
 *
 * Returns a sessionless launch url for an external tool. Prefers the
 * resource_link_lookup_uuid, but defaults to the other passed parameters id,
 * url, and launch_type
 *
 * NOTE: Either the resource_link_lookup_uuid, id, or url must be provided
 * unless launch_type is assessment or module_item.
 *
 * Nickname: get_sessionless_launch_url_for_external_tool_accounts
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/external_tools/sessionless_launch`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
