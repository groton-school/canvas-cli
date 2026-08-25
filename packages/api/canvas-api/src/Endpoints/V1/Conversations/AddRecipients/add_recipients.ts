import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type add_recipientsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type add_recipientsSearchParameters = Masquerade;

export type add_recipientsFormParameters = Masquerade & {
  /**
     * An array of recipient ids. These may be user ids or course/group ids
prefixed with &quot;course_&quot; or &quot;group_&quot; respectively, e.g.
recipients[]&#x3D;1&amp;recipients[]&#x3D;2&amp;recipients[]&#x3D;course_3
     *
     * 
     *
     * 
     */
  recipients: string[];
};

type Options = (
  | {
      path: add_recipientsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: add_recipientsPathParameters;
    }
) &
  (
    | {
        query?: Partial<add_recipientsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<add_recipientsSearchParameters>;
        body?: Partial<add_recipientsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<add_recipientsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: add_recipientsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: add_recipientsSearchParameters;
          }
      ) &
        (
          | {
              body: add_recipientsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: add_recipientsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Add recipients
 *
 * Add recipients to an existing group conversation. Response is similar to
the GET/show action, except that only includes the
latest message (e.g. "joe was added to the conversation by bob")
 *
 * nickname: add_recipients
 *
 * 
 *
 * 
 */
export async function add_recipients(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/conversations/{id}/add_recipients`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
