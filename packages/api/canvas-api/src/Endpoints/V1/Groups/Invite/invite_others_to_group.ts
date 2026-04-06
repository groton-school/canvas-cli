import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type invite_others_to_groupPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type invite_others_to_groupSearchParameters = Masquerade;

export type invite_others_to_groupFormParameters = Masquerade & {
  /** An array of email addresses to be sent invitations. */
  invitees: string[];
};

type Options = (
  | {
      path: invite_others_to_groupPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: invite_others_to_groupPathParameters;
    }
) &
  (
    | {
        query?: Partial<invite_others_to_groupSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<invite_others_to_groupSearchParameters>;
        body?: Partial<invite_others_to_groupFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<invite_others_to_groupFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: invite_others_to_groupSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: invite_others_to_groupSearchParameters;
          }
      ) &
        (
          | {
              body: invite_others_to_groupFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: invite_others_to_groupFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Invite others to a group
 *
 * Sends an invitation to all supplied email addresses which will allow the
 * receivers to join the group.
 *
 * Nickname: invite_others_to_group
 */
export async function invite_others_to_group(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/invite`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
