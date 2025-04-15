import { client } from '../../../../Client.js';
import { Rubric } from '../../../../Resources/Rubrics.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /** Related records to include in the response. */
  include: string[];
  /**
   * Applicable only if assessments are being returned. If included, returns
   * either all criteria data associated with the assessment, or just the
   * comments. If not included, both data and comments are omitted.
   */
  style: string;
};

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
 * Get a single rubric
 *
 * Returns the rubric with the given id.
 *
 * Nickname: get_single_rubric_accounts
 */
export async function get(options: Options) {
  return await client().fetchAs<Rubric>(
    `/api/v1/accounts/{account_id}/rubrics/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
