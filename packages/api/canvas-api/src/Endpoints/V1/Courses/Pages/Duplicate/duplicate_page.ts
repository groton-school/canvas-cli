import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Page } from '../../../../../Resources/Pages.js';

export type duplicate_pagePathParameters = {
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
  url_or_id: string | number;
};

export type duplicate_pageSearchParameters = Masquerade;

type Options = (
  | {
      path: duplicate_pagePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: duplicate_pagePathParameters;
    }
) &
  (
    | {
        query?: Partial<duplicate_pageSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<duplicate_pageSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<duplicate_pageSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: duplicate_pageSearchParameters;
        strict: true;
      }
  );

/**
 * Duplicate page
 *
 * Duplicate a wiki page
 *
 * Nickname: duplicate_page
 */
export async function duplicate_page(options: Options) {
  const response = await client().fetchAs<Page>(
    `/api/v1/courses/{course_id}/pages/{url_or_id}/duplicate`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
