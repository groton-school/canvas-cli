import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type start_kaltura_sessionSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<start_kaltura_sessionSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: start_kaltura_sessionSearchParameters;
      strict: true;
    };

/**
 * Start Kaltura session
 *
 * Start a new Kaltura session, so that new media can be recorded and uploaded
 * to this Canvas instance's Kaltura instance.
 *
 * Nickname: start_kaltura_session
 */
export async function start_kaltura_session(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/services/kaltura_session`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
