import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { ContextSearchResponse } from '../../../../../../Resources/LtiRegistrations.js';

export type search_for_accounts_and_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  registration_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  deployment_id: string | number;
};

export type search_for_accounts_and_coursesSearchParameters = Masquerade &
  Partial<{
    /**
     * Account ID. If provided, only searches within this account and only
     * returns direct children of this account.
     */
    only_children_of: string;
    /** String to search for in account names, SIS ids, or course codes. */
    search_term: string;
  }>;

type Options = {
  pathParams: search_for_accounts_and_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<search_for_accounts_and_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: search_for_accounts_and_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Search for Accounts and Courses
 *
 * This is a utility endpoint used by the Canvas Apps UI and may not serve
 * general use cases.
 *
 * Search for accounts and courses that match the search term on name, SIS id,
 * or course code. Returns all matching accounts and courses, including those
 * nested in sub-accounts. Returns bare-bones data about each account and
 * course, and only up to 20 of each. Used to populate the search dropdowns when
 * managing LTI registration availability.
 *
 * Nickname: search_for_accounts_and_courses
 */
export async function search_for_accounts_and_courses(options: Options) {
  const response = await client().fetchAs<ContextSearchResponse>(
    `/api/v1/accounts/{account_id}/lti_registrations/{registration_id}/deployments/{deployment_id}/context_search`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
