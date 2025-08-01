import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { CoursePace } from '../../../../Resources/CoursePace.js';

export type delete_course_pacePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
  /**
   * The id of the course
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
};

export type delete_course_paceSearchParameters = Masquerade &
  Partial<{
    /**
     * The id of the course_pace
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    course_pace_id: number | string;
  }>;

type Options = {
  pathParams: delete_course_pacePathParameters;
} & (
  | {
      searchParams?: Partial<delete_course_paceSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_course_paceSearchParameters;
      strict: true;
    }
);

/**
 * Delete a Course pace
 *
 * Returns the updated course pace
 *
 * Nickname: delete_course_pace
 */
export async function delete_course_pace(options: Options) {
  const response = await client().fetchAs<CoursePace>(
    `/api/v1/courses/{course_id}/course_pacing/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
