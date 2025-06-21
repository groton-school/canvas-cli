import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type copy_course_contentPathParameters = {
  /** ID */
  course_id: string;
};

export type copy_course_contentSearchParameters = Masquerade;

export type copy_course_contentFormParameters = Masquerade & {
  /** ID or SIS-ID of the course to copy the content from */
  source_course: string;
  /**
   * A list of the course content types to exclude, all areas not listed will
   * be copied.
   */
  except: string[];
  /**
   * A list of the course content types to copy, all areas not listed will not
   * be copied.
   */
  only: string[];
};

type Options = {
  pathParams: copy_course_contentPathParameters;
} & (
  | {
      searchParams?: Partial<copy_course_contentSearchParameters>;
      params?: Partial<copy_course_contentFormParameters>;
      strict?: false;
    }
  | {
      searchParams: copy_course_contentSearchParameters;
      params: copy_course_contentFormParameters;
      strict: true;
    }
);

/**
 * Copy course content
 *
 * DEPRECATED: Please use the {api:ContentMigrationsController#create Content
 * Migrations API}
 *
 * Copies content from one course into another. The default is to copy all
 * course content. You can control specific types to copy by using either the
 * 'except' option or the 'only' option.
 *
 * The response is the same as the course copy status endpoint
 *
 * Nickname: copy_course_content
 */
export async function copy_course_content(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/course_copy`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
