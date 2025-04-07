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
export async function query_by_account({
  parameters
}: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/audit/course/accounts/{account_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
