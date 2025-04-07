type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/lti_apps/launch_definitions`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
