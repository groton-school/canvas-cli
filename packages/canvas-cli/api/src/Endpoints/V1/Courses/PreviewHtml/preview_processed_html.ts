import { client } from '../../../../Client.js';

type Parameters = {
  /** The html content to process */
  html: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Preview processed html
 *
 * Preview html content processed for this course
 *
 * Nickname: preview_processed_html
 */
export async function preview_processed_html({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/preview_html`, {
    method: 'POST',
    params: parameters
  });
}
