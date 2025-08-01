import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';

export type select_mastery_pathPathParameters = {
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
  module_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type select_mastery_pathSearchParameters = Masquerade;

export type select_mastery_pathFormParameters = Masquerade & {
  /**
   * Assignment set chosen, as specified in the mastery_paths portion of the
   * context module item response
   */
  assignment_set_id: string;
  /**
   * Which student the selection applies to. If not specified, current user is
   * implied.
   */
  student_id: string;
};

type Options = {
  pathParams: select_mastery_pathPathParameters;
} & (
  | {
      searchParams?: Partial<select_mastery_pathSearchParameters>;
      params?: Partial<select_mastery_pathFormParameters>;
      strict?: false;
    }
  | {
      searchParams: select_mastery_pathSearchParameters;
      params: select_mastery_pathFormParameters;
      strict: true;
    }
);

/**
 * Select a mastery path
 *
 * Select a mastery path when module item includes several possible paths.
 * Requires Mastery Paths feature to be enabled. Returns a compound document
 * with the assignments included in the given path and any module items related
 * to those assignments
 *
 * Nickname: select_mastery_path
 */
export async function select_mastery_path(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items/{id}/select_mastery_path`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
