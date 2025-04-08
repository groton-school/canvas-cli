import { client } from '../../../../Client.js';
import { TermsOfService } from '../../../../Resources/Accounts.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get the Terms of Service
 *
 * Returns the terms of service for that account
 *
 * Nickname: get_terms_of_service
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<TermsOfService>(
    `/v1/accounts/{account_id}/terms_of_service`,
    { method: 'GET', params: parameters }
  );
}
