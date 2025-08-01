import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type activity_stream_summarySearchParameters = Masquerade &
  Partial<{
    /**
     * If true, will only return objects for courses the user is actively
     * participating in
     *
     * Type: boolean
     */
    only_active_courses: boolean | string;
  }>;

type Options =
  | {
      searchParams?: Partial<activity_stream_summarySearchParameters>;
      strict?: false;
    }
  | {
      searchParams: activity_stream_summarySearchParameters;
      strict: true;
    };

/**
 * Activity stream summary
 *
 * Returns a summary of the current user's global activity stream.
 *
 * Nickname: activity_stream_summary
 */
export async function activity_stream_summary(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/self/activity_stream/summary`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
