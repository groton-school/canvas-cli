import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

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

type Options = {
  pathParams: invite_others_to_groupPathParameters;
} & (
  | {
      searchParams?: Partial<invite_others_to_groupSearchParameters>;
      params?: Partial<invite_others_to_groupFormParameters>;
      strict?: false;
    }
  | {
      searchParams: invite_others_to_groupSearchParameters;
      params: invite_others_to_groupFormParameters;
      strict: true;
    }
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
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/invite`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
