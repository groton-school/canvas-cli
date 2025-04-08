import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Permissions
 *
 * Returns permission information for the calling user and the given account.
 * You may use `self` as the account id to check permissions against the domain
 * root account. The caller must have an account role or admin
 * (teacher/TA/designer) enrollment in a course in the account.
 *
 * See also the {api:CoursesController#permissions Course} and
 * {api:GroupsController#permissions Group} counterparts.
 *
 * Nickname: permissions
 */
export async function permissions({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/accounts/{account_id}/permissions`, {
    method: 'GET',
    params: parameters
  });
}
