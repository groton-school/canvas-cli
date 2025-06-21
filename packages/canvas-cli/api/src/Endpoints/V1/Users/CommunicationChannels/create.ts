import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { CommunicationChannel } from '../../../../Resources/CommunicationChannels.js';

export type createPathParameters = {
  /** ID */
  user_id: string;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** An email address or SMS number. Not required for "push" type channels. */
  'communication_channel[address]': string;
  /**
   * The type of communication channel.
   *
   * In order to enable push notification support, the server must be properly
   * configured (via `sns_creds` in Vault) to communicate with Amazon Simple
   * Notification Services, and the developer key used to create the access
   * token from this request must have an SNS ARN configured on it.
   */
  'communication_channel[type]': string;
  /**
   * A registration id, device token, or equivalent token given to an app when
   * registering with a push notification provider. Only valid for "push" type
   * channels.
   */
  'communication_channel[token]': string;
  /**
   * Only valid for site admins and account admins making requests; If true,
   * the channel is automatically validated and no confirmation email or SMS
   * is sent. Otherwise, the user must respond to a confirmation message to
   * confirm the channel.
   */
  skip_confirmation: boolean;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a communication channel
 *
 * Creates a new communication channel for the specified user.
 *
 * Nickname: create_communication_channel
 */
export async function create(options: Options) {
  const response = await client().fetchAs<CommunicationChannel>(
    `/api/v1/users/{user_id}/communication_channels`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
