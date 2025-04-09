import { client } from '../../../../Client.js';

type invite_others_to_groupPathParameters = {
  /** ID */
  group_id: string;
};

type invite_others_to_groupFormParameters = {
  /** An array of email addresses to be sent invitations. */
  invitees: string[];
};

type Options = {
  pathParams: invite_others_to_groupPathParameters;
  params?: invite_others_to_groupFormParameters;
};

/**
 * Invite others to a group
 *
 * Sends an invitation to all supplied email addresses which will allow the
 * receivers to join the group.
 *
 * Nickname: invite_others_to_group
 */
export async function invite_others_to_group({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/groups/{group_id}/invite`, {
    method: 'POST',
    pathParams,
    params
  });
}
