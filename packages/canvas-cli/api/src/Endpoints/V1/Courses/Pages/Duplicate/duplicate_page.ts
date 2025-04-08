import { client } from '../../../../../Client.js';
import { Page } from '../../../../../Resources/Pages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Duplicate page
 *
 * Duplicate a wiki page
 *
 * Nickname: duplicate_page
 */
export async function duplicate_page({ parameters }: Options) {
  return await client().fetchAs<Page>(
    `/v1/courses/{course_id}/pages/{url_or_id}/duplicate`,
    { method: 'POST', params: parameters }
  );
}
