import { client } from '../../../../Client.js';

export type preview_processed_htmlPathParameters = {
  /** ID */
  course_id: string;
};

export type preview_processed_htmlFormParameters = {
  /** The html content to process */
  html: string;
};

type Options = {
  pathParams: preview_processed_htmlPathParameters;
} & (
  | {
      params?: Partial<preview_processed_htmlFormParameters>;
      strict?: false;
    }
  | {
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
export async function preview_processed_html({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/preview_html`, {
    method: 'POST',
    pathParams,
    params
  });
}
