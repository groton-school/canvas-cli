import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Group } from '../../../../../Resources/Groups.js';

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** Only include groups that are in this type of context. */
    context_type: string;
    /**
     * - "tabs": Include the list of tabs configured for each group. See the
     *   {api:TabsController#index List available tabs API} for more
     *   information.
     */
    include: string[];
  }>;

type Options =
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List your groups
 *
 * Returns a paginated list of active groups for the current user.
 *
 * Nickname: list_your_groups
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Group[]>(
    `/api/v1/users/self/groups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
