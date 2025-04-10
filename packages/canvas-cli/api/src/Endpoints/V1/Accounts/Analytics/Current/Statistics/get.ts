import { client } from '../../../../../../Client.js';

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
 * Get department-level statistics
 *
 * Returns numeric statistics about the department and term (or filter).
 *
 * Shares the same variations on endpoint as the participation data.
 *
 * Nickname: get_department_level_statistics_current
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/analytics/current/statistics`,
    {
      method: 'GET',
      pathParams
    }
  );
}
