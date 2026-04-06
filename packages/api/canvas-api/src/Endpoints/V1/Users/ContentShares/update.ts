import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ContentShare } from '../../../../Resources/ContentShares.js';

export type updatePathParameters = {
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

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** Read state for the content share */
  read_state: string;
};

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
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
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
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update a content share
 *
 * Mark a content share read or unread
 *
 * Nickname: update_content_share
 */
export async function update(options: Options) {
  const response = await client().fetchAs<ContentShare>(
    `/api/v1/users/{user_id}/content_shares/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
