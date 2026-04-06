import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type set_outcome_ordering_for_lmgbPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type set_outcome_ordering_for_lmgbSearchParameters = Masquerade;

type Options = (
  | {
      path: set_outcome_ordering_for_lmgbPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: set_outcome_ordering_for_lmgbPathParameters;
    }
) &
  (
    | {
        query?: Partial<set_outcome_ordering_for_lmgbSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<set_outcome_ordering_for_lmgbSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: set_outcome_ordering_for_lmgbSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: set_outcome_ordering_for_lmgbSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Set outcome ordering for LMGB
 *
 * Saves the ordering of outcomes in LMGB for a user
 *
 * Nickname: set_outcome_ordering_for_lmgb
 */
export async function set_outcome_ordering_for_lmgb(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assign_outcome_order`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
