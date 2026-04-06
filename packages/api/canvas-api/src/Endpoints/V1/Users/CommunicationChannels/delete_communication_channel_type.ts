import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { CommunicationChannel } from '../../../../Resources/CommunicationChannels.js';

export type delete_communication_channel_typePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /** ID */
  type: string;
  /** ID */
  address: string;
};

export type delete_communication_channel_typeSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_communication_channel_typePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_communication_channel_typePathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_communication_channel_typeSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_communication_channel_typeSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_communication_channel_typeSearchParameters>;
        /** @deprecated Use {Options.query} */
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
