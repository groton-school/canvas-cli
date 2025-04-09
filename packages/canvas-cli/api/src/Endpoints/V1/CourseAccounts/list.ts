import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

type Options = {};

/**
 * List accounts for course admins
 *
 * A paginated list of accounts that the current user can view through their
 * admin course enrollments. (Teacher, TA, or designer enrollments). Only
 * returns "id", "name", "workflow_state", "root_account_id" and
 * "parent_account_id"
 *
 * Nickname: list_accounts_for_course_admins
 */
export async function list({}: Options) {
  return await client().fetchAs<string[]>(`/v1/course_accounts`, {
    method: 'GET'
  });
}
