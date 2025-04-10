import { client } from '../../../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  type: string;
  /** ID */
  address: string;
};

export type updateFormParameters = {
  /** The desired frequency for <X> notification */
  'notification_preferences[<X>][frequency]': string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params?: updateFormParameters;
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
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/users/self/communication_channels/{type}/{address}/notification_preferences`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
