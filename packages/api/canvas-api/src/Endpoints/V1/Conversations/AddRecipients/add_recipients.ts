import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type add_recipientsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type add_recipientsSearchParameters = Masquerade;

export type add_recipientsFormParameters = Masquerade & {
  /**
   * An array of recipient ids. These may be user ids or course/group ids
   * prefixed with "course_" or "group_" respectively, e.g.
   * recipients[]=1&recipients[]=2&recipients[]=course_3
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<add_recipientsSearchParameters>;
        body?: Partial<add_recipientsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<add_recipientsFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<add_recipientsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: add_recipientsSearchParameters;
        body?: Partial<add_recipientsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: add_recipientsFormParameters;
        strict: true;
      }
  );

/**
 * Add recipients
 *
 * Add recipients to an existing group conversation. Response is similar to the
 * GET/show action, except that only includes the latest message (e.g. "joe was
 * added to the conversation by bob")
 *
 * Nickname: add_recipients
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
