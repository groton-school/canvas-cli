import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Start Kaltura session
 *
 * Start a new Kaltura session, so that new media can be recorded and uploaded
 * to this Canvas instance's Kaltura instance.
 *
 * Nickname: start_kaltura_session
 */
export async function start_kaltura_session({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/services/kaltura_session`, {
    method: 'POST',
    params: parameters
  });
}
