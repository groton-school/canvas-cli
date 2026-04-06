import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ContentExport } from '../../../../Resources/ContentExports.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: listSearchParameters;
        strict: true;
      }
  );

/**
 * List content exports
 *
 * A paginated list of the past and pending content export jobs for a course,
 * group, or user. Exports are returned newest first.
 *
 * Nickname: list_content_exports_users
 */
export async function list(options: Options) {
  const response = await client().fetchAs<ContentExport[]>(
    `/api/v1/users/{user_id}/content_exports`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
