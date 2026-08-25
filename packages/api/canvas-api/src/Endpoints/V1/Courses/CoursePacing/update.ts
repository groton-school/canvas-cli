import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { CoursePace } from '../../../../Resources/CoursePace.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
  /**
     * The id of the course
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  course_id: number | string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
     * The id of the course pace
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  course_pace_id: number | string;
  /**
   * End date of the course pace
   *
   * format: date-time
   *
   *
   */
  end_date: string;
  /**
   * Course pace dates excludes weekends if true
   *
   * type: boolean
   *
   *
   */
  exclude_weekends: boolean | string;
  /**
     * [Array&lt;String&gt;]
Course pace dates excludes weekends if true
     *
     * 
     *
     * 
     */
  selected_days_to_skip: string;
  /**
   * Course pace uess hard end dates if true
   *
   * type: boolean
   *
   *
   */
  hard_end_dates: boolean | string;
  /**
   * The state of the course pace
   *
   *
   *
   *
   */
  workflow_state: string;
  /**
   * Module Items attributes
   *
   *
   *
   *
   */
  course_pace_module_item_attributes: string[];
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update a Course pace
 *
 * Returns the updated course pace
 *
 * nickname: update_course_pace
 *
 *
 *
 *
 */
export async function update(options: Options) {
  const response = await client().fetchAs<CoursePace>(
    `/api/v1/courses/{course_id}/course_pacing/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
