import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Tab } from '../../../../Resources/Tabs.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  tab_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The new position of the tab, 1-based
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  position: number | string;
  /**
   * No description
   *
   * Type: boolean
   */
  hidden: boolean | string;
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
 * Update a tab for a course
 *
 * Home and Settings tabs are not manageable, and can't be hidden or moved
 *
 * Returns a tab object
 *
 * Nickname: update_tab_for_course
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Tab>(
    `/api/v1/courses/{course_id}/tabs/{tab_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
