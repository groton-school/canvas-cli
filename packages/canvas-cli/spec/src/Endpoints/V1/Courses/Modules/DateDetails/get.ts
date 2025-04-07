import { LearningObjectDates } from '../../../../../Resources/LearningObjectDates.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a learning object's date information
 *
 * Get a learning object's date-related information, including due date,
 * availability dates, override status, and a paginated list of all assignment
 * overrides for the item.
 *
 * Nickname: get_learning_object_s_date_information_modules
 */
export async function get({
  parameters
}: Options): Promise<LearningObjectDates> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/modules/{context_module_id}/date_details`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
