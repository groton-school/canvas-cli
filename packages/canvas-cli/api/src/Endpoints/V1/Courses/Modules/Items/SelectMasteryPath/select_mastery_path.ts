import { client } from '../../../../../../Client.js';

export type select_mastery_pathPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  module_id: string;
  /** ID */
  id: string;
};

export type select_mastery_pathFormParameters = {
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
      params?: Partial<select_mastery_pathFormParameters>;
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items/{id}/select_mastery_path`,
    {
      method: 'POST',
      ...options
    }
  );
}
