import { client } from '../../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Activity stream summary
 *
 * Returns a summary of the current user's global activity stream.
 *
 * Nickname: activity_stream_summary
 */
export async function activity_stream_summary({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/users/self/activity_stream/summary`,
    { method: 'GET', params: parameters }
  );
}
