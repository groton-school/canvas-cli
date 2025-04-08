import { client } from '../../../../../Client.js';
import { CourseEvent } from '../../../../../Resources/CourseAuditLog.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query by account.
 *
 * List course change events for a given account.
 *
 * Nickname: query_by_account
 */
export async function query_by_account({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/audit/course/accounts/{account_id}`,
    { method: 'GET', params: parameters }
  );
}
