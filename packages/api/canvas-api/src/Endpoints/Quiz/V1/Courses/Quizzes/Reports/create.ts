import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Progress } from '../../../../../../Resources/CoursePace.js';

export type createPathParameters = {
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
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The type of report to be generated. */
  'quiz_report[report_type]': string;
  /** The format of report to be generated. */
  'quiz_report[format]': string;
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: createSearchParameters;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: createFormParameters;
        strict: true;
      }
  );

/**
 * Create a quiz report
 *
 * Generate a new report for this quiz. Returns a progress object that can be
 * used to track the progress of the report generation.
 *
 * Responses*
 *
 * <code>400 Bad Request</code> if the specified report type or format is
 * invalid <code>409 Conflict</code> if a quiz report of the specified type is
 * already being generated
 *
 * Nickname: create_quiz_report
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Progress>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/reports`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
