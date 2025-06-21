import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { Enrollment } from '../../../../../Resources/Enrollments.js';

export type re_activate_enrollmentPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type re_activate_enrollmentSearchParameters = Masquerade;

type Options = {
  pathParams: re_activate_enrollmentPathParameters;
} & (
  | {
      searchParams?: Partial<re_activate_enrollmentSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: re_activate_enrollmentSearchParameters;
      strict: true;
    }
);

/**
 * Re-activate an enrollment
 *
 * Activates an inactive enrollment
 *
 * Nickname: re_activate_enrollment
 */
export async function re_activate_enrollment(options: Options) {
  const response = await client().fetchAs<Enrollment>(
    `/api/v1/courses/{course_id}/enrollments/{id}/reactivate`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
