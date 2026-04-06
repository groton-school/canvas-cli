import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** A list of associated term ids for the grading period set */
  enrollment_term_ids: string[];
  /** The title of the grading period set */
  'grading_period_set[title]': string;
  /**
   * A boolean to determine whether the grading periods in the set are
   * weighted
   *
   * Type: boolean
   */
  'grading_period_set[weighted]': boolean | string;
  /**
   * A boolean to determine whether the totals for all grading periods in the
   * set are displayed
   *
   * Type: boolean
   */
  'grading_period_set[display_totals_for_all_grading_periods]':
    | boolean
    | string;
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
 * Create a grading period set
 *
 * Create and return a new grading period set
 *
 * Nickname: create_grading_period_set
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/grading_period_sets`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
