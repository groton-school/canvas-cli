import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { TermsOfService } from '../../../../Resources/Accounts.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
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
  const response = await client().fetchAs<TermsOfService>(
    `/api/v1/accounts/{account_id}/terms_of_service`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
