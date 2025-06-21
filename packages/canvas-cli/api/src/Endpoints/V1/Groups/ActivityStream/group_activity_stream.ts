import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type group_activity_streamPathParameters = {
  /** ID */
  group_id: string;
};

export type group_activity_streamSearchParameters = Masquerade;

type Options = {
  pathParams: group_activity_streamPathParameters;
} & (
  | {
      searchParams?: Partial<group_activity_streamSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: group_activity_streamSearchParameters;
      strict: true;
    }
);

/**
 * Group activity stream
 *
 * Returns the current user's group-specific activity stream, paginated.
 *
 * For full documentation, see the API documentation for the user activity
 * stream, in the user api.
 *
 * Nickname: group_activity_stream
 */
export async function group_activity_stream(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/activity_stream`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
