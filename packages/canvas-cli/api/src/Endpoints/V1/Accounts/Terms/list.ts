import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { EnrollmentTermsList } from '../../../../Resources/EnrollmentTerms.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * If set, only returns terms that are in the given state. Defaults to
     * 'active'.
     */
    workflow_state: string[];
    /**
     * Array of additional information to include.
     *
     * "overrides":: term start/end dates overridden for different enrollment
     * types "course_count":: the number of courses in each term
     */
    include: string[];
    /**
     * If set, only returns terms that match the given search keyword. Search
     * keyword is matched against term name.
     */
    term_name: string;
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
 * List enrollment terms
 *
 * An object with a paginated list of all of the terms in the account.
 *
 * Nickname: list_enrollment_terms
 */
export async function list(options: Options) {
  const response = await client().fetchAs<EnrollmentTermsList>(
    `/api/v1/accounts/{account_id}/terms`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
