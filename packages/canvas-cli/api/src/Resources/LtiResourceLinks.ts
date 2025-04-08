export type LtiResourceLink = {
  /**
   * The Canvas identifier for the LTI Resource Link.
   *
   * Type: integer
   */
  id: number;
  /**
   * The Canvas identifier for the context that the LTI Resource Link is
   * associated with.
   *
   * Type: integer
   */
  context_id: number;
  /** The type of the context that the LTI Resource Link is associated with. */
  context_type: string;
  /**
   * The Canvas identifier for the LTI 1.3 External Tool that the LTI Resource
   * Link was originally installed from. Note that this tool may have been
   * deleted or reinstalled and may not be the tool that would be launched for
   * this url.
   *
   * Type: integer
   */
  context_external_tool_id: number;
  /** The type of Canvas content for the resource link. Included for convenience. */
  resource_type: string;
  /**
   * The Canvas URL that launches the LTI Resource Link. Suitable for use in
   * Canvas rich content
   */
  canvas_launch_url: string;
  /**
   * The LTI identifier for the LTI Resource Link, included as the
   * resource_link_id when this link is launched
   */
  resource_link_uuid: string;
  /**
   * A unique identifier for the LTI Resource Link, present in the rich content
   * representation. Remains the same across content migration.
   */
  lookup_uuid: string;
  /**
   * The title of the LTI Resource Link. Usually tool-provided, or matches the
   * assignment name
   */
  title: string;
  /** The tool URL to which the LTI Resource Link will launch */
  url: string;
  /**
   * The LTI 1.1 identifier for the LTI Resource Link, included in lti1p1
   * migration claim when launched. Only present if tool was migrated from 1.1
   * to 1.3.
   */
  lti_1_1_id: string;
  /** Timestamp of the resource link's creation */
  created_at: string;
  /** Timestamp of the resource link's last update */
  updated_at: string;
  /** The state of the resource link */
  workflow_state: string;
  /**
   * Type of the associated content this resource link belongs to if present.
   * Now only supports `ModuleItems`, later may be extend others
   */
  associated_content_type: string;
  /**
   * The Canvas identifier of the associated content, e.g. ModuleItem related to
   * this link. Present if associated_content_type is present
   *
   * Type: integer
   */
  associated_content_id: number;
};
