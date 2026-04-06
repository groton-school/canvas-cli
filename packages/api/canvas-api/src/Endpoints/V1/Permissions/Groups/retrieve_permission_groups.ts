import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type retrieve_permission_groupsSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<retrieve_permission_groupsSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<retrieve_permission_groupsSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: retrieve_permission_groupsSearchParameters;
        }
      | {
          /** @deprecated Use {Options.query} */
          searchParams: retrieve_permission_groupsSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * Retrieve permission groups
 *
 * Retrieve information about groups of granular permissions
 *
 * The return value is a dictionary of permission group keys to objects
 * containing +label+ and +subtitle+ keys.
 *
 * Nickname: retrieve_permission_groups
 */
export async function retrieve_permission_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/permissions/groups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
