import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The partial name or full ID of the users to match and return in the
     * results list. Must be at least 2 characters.
     */
    search_term: string;
    /** "avatar_url": Include users' avatar_urls. */
    include: string[];
    /**
     * Whether to filter out inactive users from the results. Defaults to false
     * unless explicitly provided.
     *
     * Type: boolean
     */
    exclude_inactive: boolean | string;
    /**
     * When set, only return users with the specified enrollment type for the
     * given section.
     */
    enrollment_type: string;
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
 * List section's users
 *
 * Returns a paginated list of users in the section.
 *
 * Nickname: list_section_s_users
 */
export async function list(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/sections/{id}/users`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
