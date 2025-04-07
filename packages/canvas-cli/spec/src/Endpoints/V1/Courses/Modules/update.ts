import { Module } from '../../../../Resources/CoursePace.js';

type Parameters = {
  /** The name of the module */
  'module[name]': string;
  /**
   * The date the module will unlock
   *
   * Format: 'date-time'
   */
  'module[unlock_at]': string;
  /**
   * The position of the module in the course (1-based)
   *
   * Format: int64
   */
  'module[position]': number;
  /** Whether module items must be unlocked in order */
  'module[require_sequential_progress]': boolean;
  /**
   * IDs of Modules that must be completed before this one is unlocked
   * Prerequisite modules must precede this module (i.e. have a lower position
   * value), otherwise they will be ignored
   */
  'module[prerequisite_module_ids]': string[];
  /**
   * Whether to publish the student's final grade for the course upon
   * completion of this module.
   */
  'module[publish_final_grade]': boolean;
  /** Whether the module is published and visible to students */
  'module[published]': boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a module
 *
 * Update and return an existing module
 *
 * Nickname: update_module
 */
export async function update({ parameters }: Options): Promise<Module> {
  return await (
    await fetch(`/v1/courses/{course_id}/modules/{id}`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
