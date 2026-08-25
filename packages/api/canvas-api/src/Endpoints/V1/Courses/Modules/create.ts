import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Module } from '../../../../Resources/CoursePace.js';

export type createPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The name of the module
   *
   *
   *
   *
   */
  'module[name]': string;
  /**
   * The date the module will unlock
   *
   * format: date-time
   *
   *
   */
  'module[unlock_at]': string;
  /**
     * The position of this module in the course (1-based)
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'module[position]': number | string;
  /**
   * Whether module items must be unlocked in order
   *
   * type: boolean
   *
   *
   */
  'module[require_sequential_progress]': boolean | string;
  /**
     * IDs of Modules that must be completed before this one is unlocked.
Prerequisite modules must precede this module (i.e. have a lower position
value), otherwise they will be ignored
     *
     * 
     *
     * 
     */
  'module[prerequisite_module_ids]': string[];
  /**
     * Whether to publish the student&#x27;s final grade for the course upon
completion of this module.
     *
     * type: boolean
     *
     * 
     */
  'module[publish_final_grade]': boolean | string;
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
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
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create a module
 *
 * Create and return a new module
 *
 * nickname: create_module
 *
 *
 *
 *
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Module>(
    `/api/v1/courses/{course_id}/modules`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
