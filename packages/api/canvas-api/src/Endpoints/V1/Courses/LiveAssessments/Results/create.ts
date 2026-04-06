import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

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
  assessment_id: string | number;
};

export type createSearchParameters = Masquerade;

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
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: createSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Create live assessment results
 *
 * Creates live assessment results and adds them to a live assessment
 *
 * Nickname: create_live_assessment_results
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/live_assessments/{assessment_id}/results`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
