import { client } from '../../../../../Client.js';
import { Page } from '../../../../../Resources/Pages.js';

export type duplicate_pagePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  url_or_id: string;
};

type Options = {
  pathParams: duplicate_pagePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function duplicate_page({ pathParams }: Options) {
  return await client().fetchAs<Page>(
    `/v1/courses/{course_id}/pages/{url_or_id}/duplicate`,
    {
      method: 'POST',
      pathParams
    }
  );
}
