import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type group_activity_stream_summaryPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type group_activity_stream_summarySearchParameters = Masquerade;

type Options = {
  pathParams: group_activity_stream_summaryPathParameters;
} & (
  | {
      searchParams?: Partial<group_activity_stream_summarySearchParameters>;
      strict?: false;
    }
  | {
      searchParams: group_activity_stream_summarySearchParameters;
      strict: true;
    }
);

/**
 * Group activity stream summary
 *
 * Returns a summary of the current user's group-specific activity stream.
 *
 * For full documentation, see the API documentation for the user activity
 * stream summary, in the user api.
 *
 * Nickname: group_activity_stream_summary
 */
export async function group_activity_stream_summary(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/activity_stream/summary`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
