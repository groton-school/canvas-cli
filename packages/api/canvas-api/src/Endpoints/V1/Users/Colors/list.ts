import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type listSearchParameters = Masquerade;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get custom colors
 *
 * Returns all custom colors that have been saved for a user.
 *
 * Nickname: get_custom_colors
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{id}/colors`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
