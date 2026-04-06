import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

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
      query?: Partial<activity_stream_summarySearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<activity_stream_summarySearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: activity_stream_summarySearchParameters;
        }
      | {
          /** @deprecated Use {Options.query} */
          searchParams: activity_stream_summarySearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * Activity stream summary
 *
 * Returns a summary of the current user's global activity stream.
 *
 * Nickname: activity_stream_summary
 */
export async function activity_stream_summary(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/self/activity_stream/summary`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
