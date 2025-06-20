import { client } from '../../../../../Client.js';
import { LearningObjectDates } from '../../../../../Resources/LearningObjectDates.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  attachment_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a learning object's date information
 *
 * Get a learning object's date-related information, including due date,
 * availability dates, override status, and a paginated list of all assignment
 * overrides for the item.
 *
 * Nickname: get_learning_object_s_date_information_files
 */
export async function get(options: Options) {
  const response = await client().fetchAs<LearningObjectDates>(
    `/api/v1/courses/{course_id}/files/{attachment_id}/date_details`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
