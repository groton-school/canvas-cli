import { client } from '../../../../Client.js';
import { CoursePace } from '../../../../Resources/CoursePace.js';

export type delete_course_pacePathParameters = {
  /** ID */
  id: string;
  /**
   * The id of the course
   *
   * Format: 'int64'
   */
  course_id: number;
};

export type delete_course_paceSearchParameters = {
  /**
   * The id of the course_pace
   *
   * Format: 'int64'
   */
  course_pace_id: number;
};

type Options = {
  pathParams: delete_course_pacePathParameters;
} & (
  | {
      searchParams?: Partial<delete_course_paceSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: delete_course_paceSearchParameters;
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
export async function delete_course_pace({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<CoursePace>(
    `/v1/courses/{course_id}/course_pacing/{id}`,
    {
      method: 'DELETE',
      pathParams,
      searchParams
    }
  );
}
