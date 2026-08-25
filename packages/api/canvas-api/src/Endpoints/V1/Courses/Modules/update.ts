import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Module } from '../../../../Resources/CoursePace.js';

export type updatePathParameters = {
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
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
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
     * The position of the module in the course (1-based)
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
     * IDs of Modules that must be completed before this one is unlocked
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
  /**
   * Whether the module is published and visible to students
   *
   * type: boolean
   *
   *
   */
  'module[published]': boolean | string;
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
 * Update a module
 *
 * Update and return an existing module
 *
 * nickname: update_module
 *
 *
 *
 *
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Module>(
    `/api/v1/courses/{course_id}/modules/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
