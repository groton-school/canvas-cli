import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Update dashboard positions
 *
 * Updates the dashboard positions for a user for a given context. This allows
 * positions for the dashboard cards and elsewhere to be customized on a per
 * user basis.
 *
 * The asset string parameter should be in the format 'context_id', for example
 * 'course_42'
 *
 * Nickname: update_dashboard_positions
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{id}/dashboard_positions`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
