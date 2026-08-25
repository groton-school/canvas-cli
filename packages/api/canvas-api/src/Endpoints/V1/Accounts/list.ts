import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Account } from '../../../Resources/Accounts.js';

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Array of additional information to include.

&quot;lti_guid&quot;:: the &#x27;tool_consumer_instance_guid&#x27; that will be sent for this account on LTI launches
&quot;registration_settings&quot;:: returns info about the privacy policy and terms of use
&quot;services&quot;:: returns services and whether they are enabled (requires account management permissions)
&quot;course_count&quot;:: returns the number of courses directly under each account
&quot;sub_account_count&quot;:: returns the number of sub-accounts directly under each account
     *
     * 
     *
     * 
     */
    include: string[];
  }>;

type Options =
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: listSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: listSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * List accounts
 *
 * A paginated list of accounts that the current user can view or manage.
Typically, students and even teachers will get an empty list in response,
only account admins can view the accounts that they are in.
 *
 * nickname: list_accounts
 *
 * 
 *
 * 
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Account[]>(`/api/v1/accounts`, {
    method: 'GET',
    ...options
  });
  return response;
}
