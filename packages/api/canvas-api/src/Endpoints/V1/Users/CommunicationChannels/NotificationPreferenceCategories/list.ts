import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type listPathParameters = {
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
  communication_channel_id: string | number;
};

export type listSearchParameters = Masquerade;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List of preference categories
 *
 * Fetch all notification preference categories for the given communication
 * channel
 *
 * Nickname: list_of_preference_categories
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/{user_id}/communication_channels/{communication_channel_id}/notification_preference_categories`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
