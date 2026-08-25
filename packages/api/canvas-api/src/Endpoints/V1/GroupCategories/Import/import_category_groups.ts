import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Progress } from '../../../../Resources/CoursePace.js';

export type import_category_groupsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_category_id: string | number;
};

export type import_category_groupsSearchParameters = Masquerade;

export type import_category_groupsFormParameters = Masquerade & {
  /**
     * There are two ways to post group category import data - either via a
multipart/form-data form-field-style attachment, or via a non-multipart
raw post request.

&#x27;attachment&#x27; is required for multipart/form-data style posts. Assumed to
be outcome data from a file upload form field named &#x27;attachment&#x27;.

Examples:
  curl -F attachment&#x3D;@&lt;filename&gt; -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      &#x27;https://&lt;canvas&gt;/api/v1/group_categories/&lt;category_id&gt;/import&#x27;

If you decide to do a raw post, you can skip the &#x27;attachment&#x27; argument,
but you will then be required to provide a suitable Content-Type header.
You are encouraged to also provide the &#x27;extension&#x27; argument.

Examples:
  curl -H &#x27;Content-Type: text/csv&#x27; --data-binary @&lt;filename&gt;.csv \
      -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      &#x27;https://&lt;canvas&gt;/api/v1/group_categories/&lt;category_id&gt;/import&#x27;
     *
     * 
     *
     * 
     */
  attachment: string;
};

type Options = (
  | {
      path: import_category_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: import_category_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<import_category_groupsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<import_category_groupsSearchParameters>;
        body?: Partial<import_category_groupsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<import_category_groupsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: import_category_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: import_category_groupsSearchParameters;
          }
      ) &
        (
          | {
              body: import_category_groupsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: import_category_groupsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Import category groups
 *
 * Create Groups in a Group Category through a CSV import

For more information on the format that's expected here, please see the
"Group Category CSV" section in the API docs.
 *
 * nickname: import_category_groups
 *
 * 
 *
 * 
 */
export async function import_category_groups(options: Options) {
  const response = await client().fetchAs<Progress>(
    `/api/v1/group_categories/{group_category_id}/import`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
