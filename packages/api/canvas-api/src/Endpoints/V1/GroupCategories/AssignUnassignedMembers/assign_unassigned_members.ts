import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { GroupMembershipProgress } from '../../../../Overrides.js';

export type assign_unassigned_membersPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_category_id: string | number;
};

export type assign_unassigned_membersSearchParameters = Masquerade;

export type assign_unassigned_membersFormParameters = Masquerade & {
  /**
   * The assigning is done asynchronously by default. If you would like to
   * override this and have the assigning done synchronously, set this value
   * to true.
   *
   * Type: boolean
   */
  sync: boolean | string;
};

type Options = (
  | {
      path: assign_unassigned_membersPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: assign_unassigned_membersPathParameters;
    }
) &
  (
    | {
        query?: Partial<assign_unassigned_membersSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<assign_unassigned_membersSearchParameters>;
        body?: Partial<assign_unassigned_membersFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<assign_unassigned_membersFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: assign_unassigned_membersSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: assign_unassigned_membersSearchParameters;
          }
      ) &
        (
          | {
              body: assign_unassigned_membersFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: assign_unassigned_membersFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Assign unassigned members
 *
 * Assign all unassigned members as evenly as possible among the existing
 * student groups.
 *
 * Nickname: assign_unassigned_members
 */
export async function assign_unassigned_members(options: Options) {
  const response = await client().fetchAs<GroupMembershipProgress>(
    `/api/v1/group_categories/{group_category_id}/assign_unassigned_members`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
