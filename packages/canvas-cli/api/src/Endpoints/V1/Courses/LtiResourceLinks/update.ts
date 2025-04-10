import { JSONObject } from '@battis/typescript-tricks';
import { client } from '../../../../Client.js';
import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
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
  /** Update link even if it is deleted. Default is false. */
  include_deleted: boolean;
  /**
   * The Canvas identifier for the LTI 1.3 External Tool that the LTI Resource
   * Link was originally installed from. <b>Caution!</b> The resource link url
   * must match the tool's domain or url.
   *
   * Format: 'int64'
   */
  context_external_tool_id: number;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
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
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<LtiResourceLink>(
    `/v1/courses/{course_id}/lti_resource_links/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
