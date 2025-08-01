import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type get_pandata_events_jwt_token_and_its_expiration_dateSearchParameters =
  Masquerade;

export type get_pandata_events_jwt_token_and_its_expiration_dateFormParameters =
  Masquerade & {
    /** The pandata events appKey for this mobile app */
    app_key: string;
  };

type Options =
  | {
      searchParams?: Partial<get_pandata_events_jwt_token_and_its_expiration_dateSearchParameters>;
      params?: Partial<get_pandata_events_jwt_token_and_its_expiration_dateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: get_pandata_events_jwt_token_and_its_expiration_dateSearchParameters;
      params: get_pandata_events_jwt_token_and_its_expiration_dateFormParameters;
      strict: true;
    };

/**
 * Get a Pandata Events jwt token and its expiration date
 *
 * Returns a jwt auth and props token that can be used to send events to
 * Pandata.
 *
 * NOTE: This is currently only available to the mobile developer keys.
 *
 * Nickname: get_pandata_events_jwt_token_and_its_expiration_date
 */
export async function get_pandata_events_jwt_token_and_its_expiration_date(
  options: Options
) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/self/pandata_events_token`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
