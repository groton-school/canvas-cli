import { client } from '../../../../Client.js';
import { HelpLinks } from '../../../../Resources/Accounts.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get help links
 *
 * Returns the help links for that account
 *
 * Nickname: get_help_links
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<HelpLinks>(
    `/v1/accounts/{account_id}/help_links`,
    {
      method: 'GET',
      pathParams
    }
  );
}
