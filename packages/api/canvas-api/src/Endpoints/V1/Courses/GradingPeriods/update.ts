import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Date } from '../../../../Overrides.js';

export type updatePathParameters = {
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

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The date the grading period starts. */
  'grading_periods[start_date]': Date[];
  /** No description */
  'grading_periods[end_date]': Date[];
  /**
   * A weight value that contributes to the overall weight of a grading period
   * set which is used to calculate how much assignments in this period
   * contribute to the total grade
   *
   * Format: 'float'
   */
  'grading_periods[weight]': number | string[];
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: updateSearchParameters;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: updateFormParameters;
        strict: true;
      }
  );

/**
 * Update a single grading period
 *
 * Update an existing grading period.
 *
 * Nickname: update_single_grading_period
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/grading_periods/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
