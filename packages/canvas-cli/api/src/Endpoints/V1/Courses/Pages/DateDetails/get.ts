import { client } from '../../../../../Client.js';
import { LearningObjectDates } from '../../../../../Resources/LearningObjectDates.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  url_or_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a learning object's date information
 *
 * Get a learning object's date-related information, including due date,
 * availability dates, override status, and a paginated list of all assignment
 * overrides for the item.
 *
 * Nickname: get_learning_object_s_date_information_pages
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<LearningObjectDates>(
    `/v1/courses/{course_id}/pages/{url_or_id}/date_details`,
    {
      method: 'GET',
      pathParams
    }
  );
}
