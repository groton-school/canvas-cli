import { Hash } from '';
import { LtiResourceLink } from '../../../../../Resources/LtiResourceLinks.js';

type Parameters = {
  /**
   * Body [Required, Array] The POST body should be a JSON array of objects
   * containing the parameters for each link to create.
   */
  POST: string;
  /** Each object must contain a launch URL. */
  url: string[];
  /** Each object may contain a title. */
  title: string[];
  /** Custom parameters to be sent to the tool when launching this link. */
  custom: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Bulk Create LTI Resource Links
 *
 * Create up to 100 new LTI Resource Links in the specified course with the
 * provided parameters.
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
 * Each link will be associated with the ContextExternalTool available in this
 * context that matches the provided url. If a matching tool is not found, or
 * any parameters are invalid, no links will be created and this will return an
 * error.
 *
 * Nickname: bulk_create_lti_resource_links
 */
export async function bulk_create_lti_resource_links({
  parameters
}: Options): Promise<LtiResourceLink> {
  return await (
    await fetch(`/v1/courses/{course_id}/lti_resource_links/bulk`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
