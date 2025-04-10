import { client } from '../../../../../../Client.js';

export type activity_stream_summarySearchParameters = {
  /**
   * If true, will only return objects for courses the user is actively
   * participating in
   */
  only_active_courses: boolean;
};

type Options =
  | {
      searchParams?: Partial<activity_stream_summarySearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: activity_stream_summarySearchParameters;
      strict: true;
    };

/**
 * Activity stream summary
 *
 * Returns a summary of the current user's global activity stream.
 *
 * Nickname: activity_stream_summary
 */
export async function activity_stream_summary({ searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/users/self/activity_stream/summary`,
    {
      method: 'GET',
      searchParams
    }
  );
}
