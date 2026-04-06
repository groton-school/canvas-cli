import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Page } from '../../../../Resources/Pages.js';

export type show_page_groupsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  url_or_id: string | number;
};

export type show_page_groupsSearchParameters = Masquerade;

type Options = (
  | {
      path: show_page_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_page_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_page_groupsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_page_groupsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_page_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: show_page_groupsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show page
 *
 * Retrieve the content of a wiki page
 *
 * Nickname: show_page_groups
 */
export async function show_page_groups(options: Options) {
  const response = await client().fetchAs<Page>(
    `/api/v1/groups/{group_id}/pages/{url_or_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
