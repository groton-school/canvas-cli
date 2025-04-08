import { client } from '../../../../Client.js';

type Parameters = {
  /** An array of email addresses to be sent invitations. */
  invitees: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Invite others to a group
 *
 * Sends an invitation to all supplied email addresses which will allow the
 * receivers to join the group.
 *
 * Nickname: invite_others_to_group
 */
export async function invite_others_to_group({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/groups/{group_id}/invite`, {
    method: 'POST',
    params: parameters
  });
}
