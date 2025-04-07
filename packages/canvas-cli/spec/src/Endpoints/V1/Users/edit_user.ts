import { User } from '../../../Resources/Users.js';

type Parameters = {
  /** The full name of the user. This name will be used by teacher for grading. */
  'user[name]': string;
  /**
   * User's name as it will be displayed in discussions, messages, and
   * comments.
   */
  'user[short_name]': string;
  /** User's name as used to sort alphabetically in lists. */
  'user[sortable_name]': string;
  /**
   * The time zone for the user. Allowed time zones are
   * {http://www.iana.org/time-zones IANA time zones} or friendlier
   * {http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on
   * Rails time zones}.
   */
  'user[time_zone]': string;
  /** The default email address of the user. */
  'user[email]': string;
  /**
   * The user's preferred language, from the list of languages Canvas
   * supports. This is in RFC-5646 format.
   */
  'user[locale]': string;
  /**
   * A unique representation of the avatar record to assign as the user's
   * current avatar. This token can be obtained from the user avatars
   * endpoint. This supersedes the user [avatar] [url] argument, and if both
   * are included the url will be ignored. Note: this is an internal
   * representation and is subject to change without notice. It should be
   * consumed with this api endpoint and used in the user update endpoint, and
   * should not be constructed by the client.
   */
  'user[avatar][token]': string;
  /**
   * To set the user's avatar to point to an external url, do not include a
   * token and instead pass the url here. Warning: For maximum compatibility,
   * please use 128 px square images.
   */
  'user[avatar][url]': string;
  /** To set the state of user's avatar. Only valid for account administrator. */
  'user[avatar][state]': string;
  /**
   * Sets a title on the user profile. (See {api:ProfileController#settings
   * Get user profile}.) Profiles must be enabled on the root account.
   */
  'user[title]': string;
  /**
   * Sets a bio on the user profile. (See {api:ProfileController#settings Get
   * user profile}.) Profiles must be enabled on the root account.
   */
  'user[bio]': string;
  /**
   * Sets name pronunciation on the user profile. (See
   * {api:ProfileController#settings Get user profile}.) Profiles and name
   * pronunciation must be enabled on the root account.
   */
  'user[pronunciation]': string;
  /**
   * Sets pronouns on the user profile. Passing an empty string will empty the
   * user's pronouns Only Available Pronouns set on the root account are
   * allowed Adding and changing pronouns must be enabled on the root
   * account.
   */
  'user[pronouns]': string;
  /**
   * Suspends or unsuspends all logins for this user that the calling user has
   * permission to
   */
  'user[event]': string;
  /**
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   */
  override_sis_stickiness: boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Edit a user
 *
 * Modify an existing user. To modify a user's login, see the documentation for
 * logins.
 *
 * Nickname: edit_user
 */
export async function edit_user({ parameters }: Options): Promise<User> {
  return await (
    await fetch(`/v1/users/{id}`, { method: 'PUT', body: parameters })
  ).json();
}
