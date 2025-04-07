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
export async function duplicate_page({ parameters }: Options): Promise<Page> {
  return await (
    await fetch(`/v1/courses/{course_id}/pages/{url_or_id}/duplicate`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
