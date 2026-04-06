import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type get_pandata_events_jwt_token_and_its_expiration_dateSearchParameters =
  Masquerade;

export type get_pandata_events_jwt_token_and_its_expiration_dateFormParameters =
  Masquerade & {
    /** The pandata events appKey for this mobile app */
    app_key: string;
  };

type Options =
  | {
      query?: Partial<get_pandata_events_jwt_token_and_its_expiration_dateSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<get_pandata_events_jwt_token_and_its_expiration_dateSearchParameters>;
      body?: Partial<get_pandata_events_jwt_token_and_its_expiration_dateFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params?: Partial<get_pandata_events_jwt_token_and_its_expiration_dateFormParameters>;
      strict?: false;
    }
  | {
      query?: Partial<get_pandata_events_jwt_token_and_its_expiration_dateSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams: get_pandata_events_jwt_token_and_its_expiration_dateSearchParameters;
      body?: Partial<get_pandata_events_jwt_token_and_its_expiration_dateFormParameters>;
      /** @deprecated Use {@link Options.body} */
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/self/pandata_events_token`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
