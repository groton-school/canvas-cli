import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../../Client.js';

export type getPathParameters = {
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
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get document annotations read state
 *
 * Return whether annotations made on a submitted document have been read by the
 * student
 *
 * Nickname: get_document_annotations_read_state_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
