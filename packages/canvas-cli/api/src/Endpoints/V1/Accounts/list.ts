import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Array of additional information to include.
     *
     * "lti_guid":: the 'tool_consumer_instance_guid' that will be sent for this
     * account on LTI launches "registration_settings":: returns info about the
     * privacy policy and terms of use "services":: returns services and whether
     * they are enabled (requires account management permissions)
     * "course_count":: returns the number of courses directly under each
     * account "sub_account_count":: returns the number of sub-accounts directly
     * under each account
     */
    include: string[];
  }>;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List accounts
 *
 * A paginated list of accounts that the current user can view or manage.
 * Typically, students and even teachers will get an empty list in response,
 * only account admins can view the accounts that they are in.
 *
 * Nickname: list_accounts
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Account[]>(`/api/v1/accounts`, {
    method: 'GET',
    ...options
  });
  return response;
}
