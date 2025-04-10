import { client } from '../../../../../Client.js';
import { Enrollment } from '../../../../../Resources/Enrollments.js';

export type re_activate_enrollmentPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: re_activate_enrollmentPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function re_activate_enrollment({ pathParams }: Options) {
  return await client().fetchAs<Enrollment>(
    `/v1/courses/{course_id}/enrollments/{id}/reactivate`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
