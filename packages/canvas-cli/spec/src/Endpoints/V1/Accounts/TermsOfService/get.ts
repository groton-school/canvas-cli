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
export async function get({ parameters }: Options): Promise<TermsOfService> {
  return await (
    await fetch(`/v1/accounts/{account_id}/terms_of_service`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
