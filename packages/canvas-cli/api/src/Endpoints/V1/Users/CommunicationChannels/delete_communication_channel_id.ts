import { client } from '../../../../Client.js';
import { CommunicationChannel } from '../../../../Resources/CommunicationChannels.js';

export type delete_communication_channel_idPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_communication_channel_idPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a communication channel
 *
 * Delete an existing communication channel.
 *
 * Nickname: delete_communication_channel_id
 */
export async function delete_communication_channel_id(options: Options) {
  return await client().fetchAs<CommunicationChannel>(
    `/api/v1/users/{user_id}/communication_channels/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
