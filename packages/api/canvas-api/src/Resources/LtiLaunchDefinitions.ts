import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/** A bare-bones representation of an LTI tool used by Canvas to launch the tool */
export type LtiLaunchDefinition = {
  /** The type of the launch definition. Always 'ContextExternalTool' */
  definition_type: string;
  /** The Canvas ID of the tool */
  definition_id: string;
  /** The display name of the tool for the given placement */
  name: string;
  /** The description of the tool for the given placement. */
  description: string;
  /** The launch URL for the tool */
  url: string;
  /** The domain of the tool */
  domain: string;
  /**
   * Placement-specific config for given placements
   *
   * Object
   */
  placements: JSONObject;
};

/** A bare-bones LTI configuration for a specific placement */
export type LtiPlacementLaunchDefinition = {
  /** The LTI launch message type */
  message_type: string;
  /** The launch URL for this placement */
  url: string;
  /** The title of the tool for this placement */
  title: string;
};
