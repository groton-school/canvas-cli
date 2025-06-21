import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The partial name or full ID of the users to match and return in the
     * results list. Must be at least 3 characters.
     *
     * Note that the API will prefer matching on canonical user ID if the ID has
     * a numeric form. It will only search against other fields if non-numeric
     * in form, or if the numeric value doesn't yield any matches. Queries by
     * administrative users will search on SIS ID, Integration ID, login ID,
     * name, or email address
     */
    search_term: string;
    /**
     * When set, only return users enrolled with the specified course-level base
     * role. This can be a base role type of 'student', 'teacher', 'ta',
     * 'observer', or 'designer'.
     */
    enrollment_type: string;
    /**
     * The column to sort results by. For efficiency, use +id+ if you intend to
     * retrieve many pages of results. In the future, other sort options may be
     * rate-limited after 50 pages.
     */
    sort: string;
    /** The order to sort the given column by. */
    order: string;
    /**
     * When set to true and used with an account context, returns users who have
     * deleted pseudonyms for the context
     */
    include_deleted_users: boolean;
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
 * List users in account
 *
 * A paginated list of users associated with this account.
 *
 * @example_request curl https://<canvas>/api/v1/accounts/self/users?search_term=<search value> \
 *       -X GET \
 *       -H 'Authorization: Bearer <token>'
 *
 * nickname: list_users_in_account
 */
export async function list(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/accounts/{account_id}/users`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
