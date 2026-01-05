import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Course } from '../../../../Resources/Courses.js';

export type restore_course_versionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * The version to restore to (use the syllabus_versions include parameter in
   * the course show API to see available versions)
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  version_id: number | string;
};

export type restore_course_versionSearchParameters = Masquerade;

type Options = {
  pathParams: restore_course_versionPathParameters;
} & (
  | {
      searchParams?: Partial<restore_course_versionSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: restore_course_versionSearchParameters;
      strict: true;
    }
);

/**
 * Restore course version
 *
 * Restore a course to a prior version.
 *
 * Nickname: restore_course_version
 */
export async function restore_course_version(options: Options) {
  const response = await client().fetchAs<Course>(
    `/api/v1/courses/{course_id}/restore/{version_id}`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
