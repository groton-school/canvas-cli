import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Group } from '../../../Resources/Groups.js';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The name of the group
   *
   *
   *
   *
   */
  name: string;
  /**
   * A description of the group
   *
   *
   *
   *
   */
  description: string;
  /**
   * whether the group is public (applies only to community groups)
   *
   * type: boolean
   *
   *
   */
  is_public: boolean | string;
  /**
   * no description
   *
   *
   *
   *
   */
  join_level: string;
  /**
     * The allowed file storage for the group, in megabytes. This parameter is
ignored if the caller does not have the manage_storage_quotas permission.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  storage_quota_mb: number | string;
  /**
   * The sis ID of the group. Must have manage_sis permission to set.
   *
   *
   *
   *
   */
  sis_group_id: string;
};

type Options =
  | {
      query?: Partial<createSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<createSearchParameters>;
      body?: Partial<createFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | ((
      | {
          query: createSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: createSearchParameters;
        }
    ) &
      (
        | {
            body: createFormParameters;
          }
        | {
            /** @deprecated Use {@link Options.body} */
            params: createFormParameters;
          }
      ) & {
        strict: true;
      });

/**
 * Create a group
 *
 * Creates a new group. Groups created using the "/api/v1/groups/"
endpoint will be community groups.
 *
 * nickname: create_group_groups
 *
 * 
 *
 * 
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Group>(`/api/v1/groups`, {
    method: 'POST',
    ...options
  });
  return response;
}
