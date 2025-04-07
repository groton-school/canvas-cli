import { JSONValue } from '@battis/typescript-tricks';
import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

type Parameters = {
  /**
   * The launch URL for this resource link. <b>Caution!</b> URL must match the
   * URL or domain of the tool associated with this resource link
   */
  url: string;
  /**
   * Custom parameters to be sent to the tool when launching this link.
   * <b>Caution!</b> Changing these from what the tool provided could result
   * in errors if the tool doesn't see what it's expecting.
   */
  custom: Record<string, JSONValue>;
  /** Update link even if it is deleted. Default is false. */
  include_deleted: boolean;
  /**
   * The Canvas identifier for the LTI 1.3 External Tool that the LTI Resource
   * Link was originally installed from. <b>Caution!</b> The resource link url
   * must match the tool's domain or url.
   *
   * Format: int64
   */
  context_external_tool_id: number;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update an LTI Resource Link
 *
 * Update the specified resource link with the provided parameters.
 *
 * <b>Caution!</b> Changing existing links may result in launch errors.
 *
 * Nickname: update_lti_resource_link
 */
export async function update({
  parameters
}: Options): Promise<LtiResourceLink> {
  return await (
    await fetch(`/v1/courses/{course_id}/lti_resource_links/{id}`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
