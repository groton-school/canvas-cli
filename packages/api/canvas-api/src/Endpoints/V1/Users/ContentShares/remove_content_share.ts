import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type remove_content_sharePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type remove_content_shareSearchParameters = Masquerade;

type Options = (
  | {
      path: remove_content_sharePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: remove_content_sharePathParameters;
    }
) &
  (
    | {
        query?: Partial<remove_content_shareSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<remove_content_shareSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: remove_content_shareSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: remove_content_shareSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Remove content share
 *
 * Remove a content share from your list. Use +self+ as the user_id. Note that
 * this endpoint does not delete other users' copies of the content share.
 *
 * Nickname: remove_content_share
 */
export async function remove_content_share(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{user_id}/content_shares/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
