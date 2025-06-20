import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type deprecated_self_register_userPathParameters = {
  /** ID */
  account_id: string;
};

export type deprecated_self_register_userFormParameters = {
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
  /**
   * The user's preferred language, from the list of languages Canvas
   * supports. This is in RFC-5646 format.
   */
  'user[locale]': string;
  /** Whether the user accepts the terms of use. */
  'user[terms_of_use]': boolean;
  /** User's login ID. Must be a valid email address. */
  'pseudonym[unique_id]': string;
  /** The communication channel type, e.g. 'email' or 'sms'. */
  'communication_channel[type]': string;
  /** The communication channel address, e.g. the user's email address. */
  'communication_channel[address]': string;
};

type Options = {
  pathParams: deprecated_self_register_userPathParameters;
} & (
  | {
      params?: Partial<deprecated_self_register_userFormParameters>;
      strict?: false;
    }
  | {
      params: deprecated_self_register_userFormParameters;
      strict: true;
    }
);

/**
 * [DEPRECATED] Self register a user
 *
 * Self register and return a new user and pseudonym for an account.
 *
 * If self-registration is enabled on the account, you can use this endpoint to
 * self register new users.
 *
 * Nickname: deprecated_self_register_user
 */
export async function deprecated_self_register_user(options: Options) {
  const response = await client().fetchAs<User>(
    `/api/v1/accounts/{account_id}/self_registration`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
