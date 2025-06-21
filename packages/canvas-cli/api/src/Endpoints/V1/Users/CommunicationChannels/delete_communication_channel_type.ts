import { Masquerade } from '@groton/canvas-cli.client.base';
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

export type delete_communication_channel_typeSearchParameters = Masquerade;

type Options = {
  pathParams: delete_communication_channel_typePathParameters;
} & (
  | {
      searchParams?: Partial<delete_communication_channel_typeSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_communication_channel_typeSearchParameters;
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
export async function delete_communication_channel_type(options: Options) {
  const response = await client().fetchAs<CommunicationChannel>(
    `/api/v1/users/{user_id}/communication_channels/{type}/{address}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
