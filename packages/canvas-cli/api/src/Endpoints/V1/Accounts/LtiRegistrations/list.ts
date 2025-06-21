import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { ListLtiRegistrationsResponse } from '../../../../Resources/LtiRegistrations.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * The number of registrations to return per page. Defaults to 15.
     *
     * Format: 'int64'
     */
    per_page: number;
    /**
     * The page number to return. Defaults to 1.
     *
     * Format: 'int64'
     */
    page: number;
    /**
     * The field to sort by. Choices are: name, nickname, lti_version,
     * installed, installed_by, updated_by, updated, and on. Defaults to
     * installed.
     */
    sort: string;
    /** The order to sort the given column by. Defaults to desc. */
    dir: string;
    /**
     * Array of additional data to include. Always includes [account_binding].
     *
     * "account_binding":: the registration's binding to the given account
     * "configuration":: the registration's Canvas-style tool configuration,
     * without any overlays applied. "overlaid_configuration":: the
     * registration's Canvas-style tool configuration, with all overlays
     * applied. "overlay":: the registration's admin-defined configuration
     * overlay
     */
    include: string[];
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List LTI Registrations in an account
 *
 * Returns all LTI registrations in the specified account. Includes
 * registrations created in this account, those set to 'allow' from a parent
 * root account (like Site Admin) and 'on' for this account, and those enabled
 * 'on' at the parent root account level.
 *
 * Nickname: list_lti_registrations_in_account
 */
export async function list(options: Options) {
  const response = await client().fetchAs<ListLtiRegistrationsResponse>(
    `/api/v1/accounts/{account_id}/lti_registrations`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
