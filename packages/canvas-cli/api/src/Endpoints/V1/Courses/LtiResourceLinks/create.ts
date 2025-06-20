import { JSONObject } from '@battis/typescript-tricks';
import { client } from '../../../../Client.js';
import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
};

export type createFormParameters = {
  /** The launch URL for this resource link. */
  url: string;
  /** The title of the resource link. */
  title: string;
  /**
   * Custom parameters to be sent to the tool when launching this link.
   *
   * Hash
   */
  custom: JSONObject;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

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
export async function create(options: Options) {
  const response = await client().fetchAs<LtiResourceLink>(
    `/api/v1/courses/{course_id}/lti_resource_links`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
