import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * If specified, only the users whose ids are given will be included in the
results. SIS ids can be used, prefixed by &quot;sis_user_id:&quot;.
It is an error to specify an id for a user who is not a student in
the context.
     *
     * 

format: 'int64'
     *
     * 
     */
    user_ids: number | string[];
    /**
     * If specified, only the outcomes whose ids are given will be included in the
results. it is an error to specify an id for an outcome which is not linked
to the context.
     *
     * 

format: 'int64'
     *
     * 
     */
    outcome_ids: number | string[];
    /**
     * [String, &quot;alignments&quot;|&quot;outcomes&quot;|&quot;outcomes.alignments&quot;|&quot;outcome_groups&quot;|&quot;outcome_links&quot;|&quot;outcome_paths&quot;|&quot;users&quot;]
Specify additional collections to be side loaded with the result.
&quot;alignments&quot; includes only the alignments referenced by the returned
results.
&quot;outcomes.alignments&quot; includes all alignments referenced by outcomes in the
context.
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * If true, results that are hidden from the learning mastery gradebook and student rollup
scores will be included
     *
     * type: boolean
     *
     * 
     */
    include_hidden: boolean | string;
  }>;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get outcome results
 *
 * Gets the outcome results for users and outcomes in the specified context.

used in sLMGB
 *
 * nickname: get_outcome_results
 *
 * 
 *
 * 
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/outcome_results`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
