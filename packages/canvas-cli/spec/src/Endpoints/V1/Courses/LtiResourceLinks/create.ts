import { JSONValue } from '@battis/typescript-tricks';
import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

type Parameters = {
  /** The launch URL for this resource link. */
  url: string;
  /** The title of the resource link. */
  title: string;
  /** Custom parameters to be sent to the tool when launching this link. */
  custom: Record<string, JSONValue>;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create an LTI Resource Link
 *
 * Create a new LTI Resource Link in the specified course with the provided
 * parameters.
 *
 * <b>Caution!</b> Resource Links are usually created by the tool via LTI Deep
 * Linking. The tool has no knowledge of links created via this API, and may not
 * be able to handle or launch them.
 *
 * Links created using this API cannot be associated with a specific piece of
 * Canvas content, like an Assignment, Module Item, or Collaboration. Links
 * created using this API are only suitable for embedding in rich content using
 * the `canvas_launch_url` provided in the API response.
 *
 * This link will be associated with the ContextExternalTool available in this
 * context that matches the provided url. If a matching tool is not found, the
 * link will not be created and this will return an error.
 *
 * Nickname: create_lti_resource_link
 */
export async function create({
  parameters
}: Options): Promise<LtiResourceLink> {
  return await (
    await fetch(`/v1/courses/{course_id}/lti_resource_links`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
