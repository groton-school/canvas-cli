import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = {
  /**
   * The placements to return launch definitions for. If not provided, an
   * empty list will be returned.
   */
  'placements[Array]': string;
  /**
   * If true, only return launch definitions that are visible to the current
   * user. Defaults to true.
   */
  'only_visible[Boolean]': string;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List LTI Launch Definitions
 *
 * List all tools available in this context for the given placements, in the
 * form of Launch Definitions. Used primarily by the Canvas frontend. API users
 * should consider using the External Tools API instead. This endpoint is cached
 * for 10 minutes!
 *
 * Nickname: list_lti_launch_definitions_accounts
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/lti_apps/launch_definitions`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
