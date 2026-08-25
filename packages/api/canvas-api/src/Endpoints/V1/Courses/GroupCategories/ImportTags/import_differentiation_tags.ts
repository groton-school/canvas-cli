import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Progress } from '../../../../../Resources/CoursePace.js';

export type import_differentiation_tagsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type import_differentiation_tagsSearchParameters = Masquerade;

export type import_differentiation_tagsFormParameters = Masquerade & {
  /**
     * There are two ways to post differentiation tag import data - either via a
multipart/form-data form-field-style attachment, or via a non-multipart
raw post request.

&#x27;attachment&#x27; is required for multipart/form-data style posts. Assumed to
be tag data from a file upload form field named &#x27;attachment&#x27;.

Examples:
  curl -F attachment&#x3D;@&lt;filename&gt; -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      &#x27;https://&lt;canvas&gt;/api/v1/group_categories/import_tags&#x27;

If you decide to do a raw post, you can skip the &#x27;attachment&#x27; argument,
but you will then be required to provide a suitable Content-Type header.
You are encouraged to also provide the &#x27;extension&#x27; argument.

Examples:
  curl -H &#x27;Content-Type: text/csv&#x27; --data-binary @&lt;filename&gt;.csv \
      -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      &#x27;https://&lt;canvas&gt;/api/v1/group_categories_tags&#x27;
     *
     * 
     *
     * 
     */
  attachment: string;
};

type Options = (
  | {
      path: import_differentiation_tagsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: import_differentiation_tagsPathParameters;
    }
) &
  (
    | {
        query?: Partial<import_differentiation_tagsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<import_differentiation_tagsSearchParameters>;
        body?: Partial<import_differentiation_tagsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<import_differentiation_tagsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: import_differentiation_tagsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: import_differentiation_tagsSearchParameters;
          }
      ) &
        (
          | {
              body: import_differentiation_tagsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: import_differentiation_tagsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Import differentiation tags
 *
 * Create Differentiation Tags through a CSV import

For more information on the format that's expected here, please see the
"Differentiation Tag CSV" section in the API docs.
 *
 * nickname: import_differentiation_tags
 *
 * 
 *
 * 
 */
export async function import_differentiation_tags(options: Options) {
  const response = await client().fetchAs<Progress>(
    `/api/v1/courses/{course_id}/group_categories/import_tags`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
