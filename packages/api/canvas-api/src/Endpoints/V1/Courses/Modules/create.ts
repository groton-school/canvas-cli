import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Module } from '../../../../Resources/CoursePace.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The name of the module */
  'module[name]': string;
  /**
   * The date the module will unlock
   *
   * Format: date-time
   */
  'module[unlock_at]': string;
  /**
   * The position of this module in the course (1-based)
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
   * IDs of Modules that must be completed before this one is unlocked.
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
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a module
 *
 * Create and return a new module
 *
 * Nickname: create_module
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
