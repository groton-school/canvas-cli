import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Progress } from '../../../../Resources/CoursePace.js';

export type query_progressPathParameters = {
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
  id: string | number;
};

export type query_progressSearchParameters = Masquerade;

type Options = (
  | {
      path: query_progressPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: query_progressPathParameters;
    }
) &
  (
    | {
        query?: Partial<query_progressSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<query_progressSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: query_progressSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: query_progressSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Query progress
 *
 * Return completion and status information about an asynchronous job
 *
 * Nickname: query_progress
 */
export async function query_progress(options: Options) {
  const response = await client().fetchAs<Progress>(
    `/api/lti/courses/{course_id}/progress/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
