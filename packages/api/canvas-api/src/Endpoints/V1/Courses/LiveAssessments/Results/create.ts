import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type createPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
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
 * nickname: create_live_assessment_results
 *
 *
 *
 *
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
