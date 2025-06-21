import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
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

type Options = {
  pathParams: duplicate_pagePathParameters;
} & (
  | {
      searchParams?: Partial<duplicate_pageSearchParameters>;
      strict?: false;
    }
  | {
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
