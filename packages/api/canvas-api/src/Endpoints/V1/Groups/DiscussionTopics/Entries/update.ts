import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type updatePathParameters = {
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
  topic_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The updated body of the entry. */
  message: string;
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
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: updateSearchParameters;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: updateFormParameters;
        strict: true;
      }
  );

/**
 * Update an entry
 *
 * Update an existing discussion entry.
 *
 * The entry must have been created by the current user, or the current user
 * must have admin rights to the discussion. If the edit is not allowed, a 401
 * will be returned.
 *
 * Nickname: update_entry_groups
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
