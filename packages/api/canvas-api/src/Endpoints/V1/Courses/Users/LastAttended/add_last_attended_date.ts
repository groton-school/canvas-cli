import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Enrollment } from '../../../../../Resources/Enrollments.js';

export type add_last_attended_datePathParameters = {
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
  user_id: string | number;
};

export type add_last_attended_dateSearchParameters = Masquerade;

export type add_last_attended_dateFormParameters = Masquerade & {
  /**
   * The last attended date of a student enrollment in a course.
   *
   * Format: date
   */
  date: string;
};

type Options = (
  | {
      path: add_last_attended_datePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: add_last_attended_datePathParameters;
    }
) &
  (
    | {
        query?: Partial<add_last_attended_dateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<add_last_attended_dateSearchParameters>;
        body?: Partial<add_last_attended_dateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<add_last_attended_dateFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<add_last_attended_dateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: add_last_attended_dateSearchParameters;
        body?: Partial<add_last_attended_dateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: add_last_attended_dateFormParameters;
        strict: true;
      }
  );

/**
 * Add last attended date
 *
 * Add last attended date to student enrollment in course
 *
 * Nickname: add_last_attended_date
 */
export async function add_last_attended_date(options: Options) {
  const response = await client().fetchAs<Enrollment>(
    `/api/v1/courses/{course_id}/users/{user_id}/last_attended`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
