import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Module } from '../../../../Resources/CoursePace.js';

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
  /** The name of the module */
  'module[name]': string;
  /**
   * The date the module will unlock
   *
   * Format: date-time
   */
  'module[unlock_at]': string;
  /**
   * The position of the module in the course (1-based)
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'module[position]': number | string;
  /**
   * Whether module items must be unlocked in order
   *
   * Type: boolean
   */
  'module[require_sequential_progress]': boolean | string;
  /**
   * IDs of Modules that must be completed before this one is unlocked
   * Prerequisite modules must precede this module (i.e. have a lower position
   * value), otherwise they will be ignored
   */
  'module[prerequisite_module_ids]': string[];
  /**
   * Whether to publish the student's final grade for the course upon
   * completion of this module.
   *
   * Type: boolean
   */
  'module[publish_final_grade]': boolean | string;
  /**
   * Whether the module is published and visible to students
   *
   * Type: boolean
   */
  'module[published]': boolean | string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a module
 *
 * Update and return an existing module
 *
 * Nickname: update_module
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
