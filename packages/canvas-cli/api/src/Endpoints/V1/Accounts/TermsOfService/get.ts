import { client } from '../../../../Client.js';
import { TermsOfService } from '../../../../Resources/Accounts.js';

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
 * Get the Terms of Service
 *
 * Returns the terms of service for that account
 *
 * Nickname: get_terms_of_service
 */
export async function get(options: Options) {
  return await client().fetchAs<TermsOfService>(
    `/api/v1/accounts/{account_id}/terms_of_service`,
    {
      method: 'GET',
      ...options
    }
  );
}
