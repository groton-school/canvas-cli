import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { CommunicationChannel } from '../../../../Resources/CommunicationChannels.js';

export type delete_communication_channel_idPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_communication_channel_idSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_communication_channel_idPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_communication_channel_idPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_communication_channel_idSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_communication_channel_idSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_communication_channel_idSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_communication_channel_idSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a communication channel
 *
 * Delete an existing communication channel.
 *
 * Nickname: delete_communication_channel_id
 */
export async function delete_communication_channel_id(options: Options) {
  const response = await client().fetchAs<CommunicationChannel>(
    `/api/v1/users/{user_id}/communication_channels/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
