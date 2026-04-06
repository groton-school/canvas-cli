import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type group_activity_streamPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type group_activity_streamSearchParameters = Masquerade;

type Options = (
  | {
      path: group_activity_streamPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: group_activity_streamPathParameters;
    }
) &
  (
    | {
        query?: Partial<group_activity_streamSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<group_activity_streamSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<group_activity_streamSearchParameters>;
        /** @deprecated Use {Options.query} */
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/activity_stream`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
