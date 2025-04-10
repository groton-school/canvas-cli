import { JSONObject } from '@battis/typescript-tricks';

/** An abbreviated representation of an LTI Context */
export type NamesAndRoleContext = {
  /** LTI Context unique identifier */
  id: string;
  /** LTI Context short name or code */
  label: string;
  /** LTI Context full name */
  title: string;
};

/**
 * Additional attributes which would appear in the LTI launch message were this
 * member to click the specified resource link (`rlid` query parameter)
 */
export type NamesAndRoleMessage = {
  /**
   * The type of LTI message being described. Always set to
   * 'LtiResourceLinkRequest'
   */
  'https://purl.imsglobal.org/spec/lti/claim/message_type': string;
  /** The member's preferred locale */
  locale: string;
  /**
   * The member's API ID
   *
   * Type: integer
   */
  'https://www.instructure.com/canvas_user_id': number;
  /** The member's primary login username */
  'https://www.instructure.com/canvas_user_login_id': string;
  /**
   * Expanded LTI custom parameters that pertain to the member (as opposed to
   * the Context)
   *
   * Object
   */
  'https://purl.imsglobal.org/spec/lti/claim/custom': JSONObject;
};

/** A member of a LTI Context in one or more roles */
export type NamesAndRoleMembership = {
  /** Membership state */
  status: string;
  /**
   * Member's full name. Only included if tool privacy level is `public` or
   * `name_only`.
   */
  name: string;
  /**
   * URL to the member's avatar. Only included if tool privacy level is
   * `public`.
   */
  picture: string;
  /**
   * Member's 'first' name. Only included if tool privacy level is `public` or
   * `name_only`.
   */
  given_name: string;
  /**
   * Member's 'last' name. Only included if tool privacy level is `public` or
   * `name_only`.
   */
  family_name: string;
  /**
   * Member's email address. Only included if tool privacy level is `public` or
   * `email_only`.
   */
  email: string;
  /**
   * Member's primary SIS identifier. Only included if tool privacy level is
   * `public` or `name_only`.
   */
  lis_person_sourcedid: string;
  /** Member's unique LTI identifier. */
  user_id: string;
  /** Member's roles in the current Context, expressed as LTI/LIS URNs. */
  roles: string[];
  /**
   * Only present when the request specifies a `rlid` query parameter. Contains
   * additional attributes which would appear in the LTI launch message were
   * this member to click the link referenced by the `rlid` query parameter
   */
  message: NamesAndRoleMessage[];
};

export type NamesAndRoleMemberships = {
  /** Invocation URL */
  id: string;
  /** The LTI Context containing the memberships */
  context: NamesAndRoleContext;
  /** A list of NamesAndRoleMembership */
  members: NamesAndRoleMembership[];
};
