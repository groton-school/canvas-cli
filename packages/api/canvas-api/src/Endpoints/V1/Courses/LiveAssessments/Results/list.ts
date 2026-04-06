import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type listPathParameters = {
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
  assessment_id: string | number;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * If set, restrict results to those for this user
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    user_id: number | string;
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List live assessment results
 *
 * Returns a paginated list of live assessment results
 *
 * Nickname: list_live_assessment_results
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/live_assessments/{assessment_id}/results`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
