import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type preview_processed_htmlPathParameters = {
  /** ID */
  course_id: string;
};

export type preview_processed_htmlSearchParameters = Masquerade;

export type preview_processed_htmlFormParameters = Masquerade & {
  /** The html content to process */
  html: string;
};

type Options = {
  pathParams: preview_processed_htmlPathParameters;
} & (
  | {
      searchParams?: Partial<preview_processed_htmlSearchParameters>;
      params?: Partial<preview_processed_htmlFormParameters>;
      strict?: false;
    }
  | {
      searchParams: preview_processed_htmlSearchParameters;
      params: preview_processed_htmlFormParameters;
      strict: true;
    }
);

/**
 * Preview processed html
 *
 * Preview html content processed for this course
 *
 * Nickname: preview_processed_html
 */
export async function preview_processed_html(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/preview_html`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
