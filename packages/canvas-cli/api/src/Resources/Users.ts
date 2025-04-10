import { CalendarLink } from './Courses.js';
import { Enrollment } from './Enrollments.js';

/**
 * This mini-object is used for secondary user responses, when we just want to
 * provide enough information to display a user.
 */
export type UserDisplay = {
  /**
   * The ID of the user.
   *
   * Format: 'int64'
   */
  id: number;
  /**
   * A short name the user has selected, for use in conversations or other less
   * formal places through the site.
   */
  short_name: string;
  /**
   * If avatars are enabled, this field will be included and contain a url to
   * retrieve the user's avatar.
   */
  avatar_image_url: string;
  /** URL to access user, either nested to a context or directly. */
  html_url: string;
};

/**
 * This mini-object is returned in place of UserDisplay when returning student
 * data for anonymous assignments, and includes an anonymous ID to identify a
 * user within the scope of a single assignment.
 */
export type AnonymousUserDisplay = {
  /**
   * A unique short ID identifying this user within the scope of a particular
   * assignment.
   */
  anonymous_id: string;
  /** A URL to retrieve a generic avatar. */
  avatar_image_url: string;
  /** The anonymized display name for the student. */
  display_name: string;
};

/** A Canvas user, e.g. a student, teacher, administrator, observer, etc. */
export type User = {
  /**
   * The ID of the user.
   *
   * Format: 'int64'
   */
  id: number;
  /** The name of the user. */
  name: string;
  /**
   * The name of the user that is should be used for sorting groups of users,
   * such as in the gradebook.
   */
  sortable_name: string;
  /** The last name of the user. */
  last_name: string;
  /** The first name of the user. */
  first_name: string;
  /**
   * A short name the user has selected, for use in conversations or other less
   * formal places through the site.
   */
  short_name: string;
  /**
   * The SIS ID associated with the user. This field is only included if the
   * user came from a SIS import and has permissions to view SIS information.
   */
  sis_user_id: string;
  /**
   * The id of the SIS import. This field is only included if the user came from
   * a SIS import and has permissions to manage SIS information.
   *
   * Format: 'int64'
   */
  sis_import_id: number;
  /**
   * The integration_id associated with the user. This field is only included if
   * the user came from a SIS import and has permissions to view SIS
   * information.
   */
  integration_id: string;
  /**
   * The unique login id for the user. This is what the user uses to log in to
   * Canvas.
   */
  login_id: string;
  /**
   * If avatars are enabled, this field will be included and contain a url to
   * retrieve the user's avatar.
   */
  avatar_url: string;
  /**
   * Optional: If avatars are enabled and caller is admin, this field can be
   * requested and will contain the current state of the user's avatar.
   */
  avatar_state: string;
  /**
   * Optional: This field can be requested with certain API calls, and will
   * return a list of the users active enrollments. See the List enrollments API
   * for more details about the format of these records.
   */
  enrollments: Enrollment[];
  /**
   * Optional: This field can be requested with certain API calls, and will
   * return the users primary email address.
   */
  email: string;
  /**
   * Optional: This field can be requested with certain API calls, and will
   * return the users locale in RFC 5646 format.
   */
  locale: string;
  /**
   * Optional: This field is only returned in certain API calls, and will return
   * a timestamp representing the last time the user logged in to canvas.
   *
   * Format: 'date-time'
   */
  last_login: string;
  /**
   * Optional: This field is only returned in certain API calls, and will return
   * the IANA time zone name of the user's preferred timezone.
   */
  time_zone: string;
  /** Optional: The user's bio. */
  bio: string;
  /**
   * Optional: This field is only returned if pronouns are enabled, and will
   * return the pronouns of the user.
   */
  pronouns: string;
};

/** Profile details for a Canvas user. */
export type Profile = {
  /**
   * The ID of the user.
   *
   * Type: integer
   */
  id: number;
  /** Sample User */
  name: string;
  /** Sample User */
  short_name: string;
  /** User, sample */
  sortable_name: string;
  title: string;
  bio: string;
  /** Name pronunciation */
  pronunciation: string;
  /** Sample_user@example.com */
  primary_email: string;
  /** Sample_user@example.com */
  login_id: string;
  /** Sis1 */
  sis_user_id: string;
  lti_user_id: string;
  /**
   * The avatar_url can change over time, so we recommend not caching it for
   * more than a few hours
   */
  avatar_url: string;
  calendar: CalendarLink;
  /**
   * Optional: This field is only returned in certain API calls, and will return
   * the IANA time zone name of the user's preferred timezone.
   */
  time_zone: string;
  /** The users locale. */
  locale: string;
  /**
   * Optional: Whether or not the user is a K5 user. This field is nil if the
   * user settings are not for the user making the request.
   */
  k5_user: boolean;
  /**
   * Optional: Whether or not the user should see the classic font on the
   * dashboard. Only applies if k5_user is true. This field is nil if the user
   * settings are not for the user making the request.
   */
  use_classic_font_in_k5: boolean;
};

/** Possible avatar for a user. */
export type Avatar = {
  /**
   * ['gravatar'|'attachment'|'no_pic'] The type of avatar record, for
   * categorization purposes.
   */
  type: string;
  /** The url of the avatar */
  url: string;
  /**
   * A unique representation of the avatar record which can be used to set the
   * avatar with the user update endpoint. Note: this is an internal
   * representation and is subject to change without notice. It should be
   * consumed with this api endpoint and used in the user update endpoint, and
   * should not be constructed by the client.
   */
  token: string;
  /** A textual description of the avatar record. */
  display_name: string;
  /**
   * ['attachment' type only] the internal id of the attachment
   *
   * Type: integer
   */
  id: number;
  /** ['attachment' type only] the content-type of the attachment. */
  'content-type': string;
  /** ['attachment' type only] the filename of the attachment */
  filename: string;
  /**
   * ['attachment' type only] the size of the attachment
   *
   * Type: integer
   */
  size: number;
};

/** The record of a user page view access in Canvas */
export type PageView = {
  /**
   * A UUID representing the page view. This is also the unique request id
   *
   * Format: 'uuid'
   */
  id: string;
  /**
   * If the request is from an API request, the app that generated the access
   * token
   */
  app_name: string;
  /** The URL requested */
  url: string;
  /** The type of context for the request */
  context_type: string;
  /** The type of asset in the context for the request, if any */
  asset_type: string;
  /** The rails controller that handled the request */
  controller: string;
  /** The rails action that handled the request */
  action: string;
  /** This field is deprecated, and will always be false */
  contributed: boolean;
  /** An approximation of how long the user spent on the page, in seconds */
  interaction_seconds: number;
  /**
   * When the request was made
   *
   * Format: 'iso8601'
   */
  created_at: string;
  /**
   * A flag indicating whether the request was user-initiated, or automatic
   * (such as an AJAX call)
   */
  user_request: boolean;
  /** How long the response took to render, in seconds */
  render_time: number;
  /** The user-agent of the browser or program that made the request */
  user_agent: string;
  /** True if the request counted as participating, such as submitting homework */
  participated: boolean;
  /** The HTTP method such as GET or POST */
  http_method: string;
  /** The origin IP address of the request */
  remote_ip: string;
  /** The page view links to define the relationships */
  links: PageViewLinks;
};

/** The links of a page view access in Canvas */
export type PageViewLinks = {
  /**
   * The ID of the user for this page view
   *
   * Format: 'int64'
   */
  user: number;
  /**
   * The ID of the context for the request (course id if context_type is Course,
   * etc)
   *
   * Format: 'int64'
   */
  context: number;
  /**
   * The ID of the asset for the request, if any
   *
   * Format: 'int64'
   */
  asset: number;
  /**
   * The ID of the actual user who made this request, if the request was made by
   * a user who was masquerading
   *
   * Format: 'int64'
   */
  real_user: number;
  /**
   * The ID of the account context for this page view
   *
   * Format: 'int64'
   */
  account: number;
};

export type CourseNickname = {
  /**
   * The ID of the course
   *
   * Type: integer
   */
  course_id: number;
  /** The actual name of the course */
  name: string;
  /** The calling user's nickname for the course */
  nickname: string;
};
