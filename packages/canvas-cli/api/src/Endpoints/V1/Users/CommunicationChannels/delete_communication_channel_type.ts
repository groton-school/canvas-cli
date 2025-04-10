import { client } from '../../../../Client.js';
import { CommunicationChannel } from '../../../../Resources/CommunicationChannels.js';

export type delete_communication_channel_typePathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  type: string;
  /** ID */
  address: string;
};

type Options = {
  pathParams: delete_communication_channel_typePathParameters;
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
 * Nickname: delete_communication_channel_type
 */
export async function delete_communication_channel_type({
  pathParams
}: Options) {
  return await client().fetchAs<CommunicationChannel>(
    `/v1/users/{user_id}/communication_channels/{type}/{address}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
