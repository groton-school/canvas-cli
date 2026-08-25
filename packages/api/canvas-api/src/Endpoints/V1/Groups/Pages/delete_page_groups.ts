import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Page } from '../../../../Resources/Pages.js';

export type delete_page_groupsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  url_or_id: string | number;
};

export type delete_page_groupsSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_page_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_page_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_page_groupsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_page_groupsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_page_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_page_groupsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete page
 *
 * Delete a wiki page
 *
 * nickname: delete_page_groups
 *
 *
 *
 *
 */
export async function delete_page_groups(options: Options) {
  const response = await client().fetchAs<Page>(
    `/api/v1/groups/{group_id}/pages/{url_or_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
