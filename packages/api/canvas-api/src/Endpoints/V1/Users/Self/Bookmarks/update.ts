import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Folder } from '../../../../../Resources/Files.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The name of the bookmark */
  name: string;
  /** The url of the bookmark */
  url: string;
  /**
   * The position of the bookmark. Defaults to the bottom.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  position: number | string;
  /** The data associated with the bookmark */
  data: string;
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
        /** @deprecated Use {Options.query} */
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
            /** @deprecated Use {Options.query} */
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
 * Update bookmark
 *
 * Updates a bookmark
 *
 * Nickname: update_bookmark
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Folder>(
    `/api/v1/users/self/bookmarks/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
