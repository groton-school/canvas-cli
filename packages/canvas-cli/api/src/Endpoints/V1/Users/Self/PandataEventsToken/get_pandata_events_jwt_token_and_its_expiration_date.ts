import { client } from '../../../../../Client.js';

type Parameters = {
  /** The pandata events appKey for this mobile app */
  app_key: string;
};

type Options = {
  parameters: Parameters;
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
export async function get_pandata_events_jwt_token_and_its_expiration_date({
  parameters
}: Options) {
  return await client().fetchAs<void>(`/v1/users/self/pandata_events_token`, {
    method: 'POST',
    params: parameters
  });
}
