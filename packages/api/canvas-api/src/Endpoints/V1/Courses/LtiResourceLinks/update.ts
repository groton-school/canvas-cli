import { JSONObject } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

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
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The launch URL for this resource link. <b>Caution!</b> URL must match the
   * URL or domain of the tool associated with this resource link
   */
  url: string;
  /**
   * Custom parameters to be sent to the tool when launching this link.
   * <b>Caution!</b> Changing these from what the tool provided could result
   * in errors if the tool doesn't see what it's expecting.
   *
   * Hash
   */
  custom: JSONObject;
  /**
   * Update link even if it is deleted. Default is false.
   *
   * Type: boolean
   */
  include_deleted: boolean | string;
  /**
   * The Canvas identifier for the LTI 1.3 External Tool that the LTI Resource
   * Link was originally installed from. <b>Caution!</b> The resource link url
   * must match the tool's domain or url.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  context_external_tool_id: number | string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update an LTI Resource Link
 *
 * Update the specified resource link with the provided parameters.
 *
 * <b>Caution!</b> Changing existing links may result in launch errors.
 *
 * Nickname: update_lti_resource_link
 */
export async function update(options: Options) {
  const response = await client().fetchAs<LtiResourceLink>(
    `/api/v1/courses/{course_id}/lti_resource_links/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
