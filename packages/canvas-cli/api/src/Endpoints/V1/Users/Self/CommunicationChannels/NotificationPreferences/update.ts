import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  type: string;
  /** ID */
  address: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The desired frequency for <X> notification */
  'notification_preferences[<X>][frequency]': string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update multiple preferences
 *
 * Change the preferences for multiple notifications for a single communication
 * channel at once
 *
 * Nickname: update_multiple_preferences_type
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/self/communication_channels/{type}/{address}/notification_preferences`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
