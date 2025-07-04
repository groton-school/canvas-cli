import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Grader } from '../../../../Resources/GradebookHistory.js';

export type details_for_given_date_in_gradebook_history_for_this_coursePathParameters =
  {
    /**
     * The id of the contextual course for this API call
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    course_id: number | string;
    /** The date for which you would like to see detailed information */
    date: string;
  };

export type details_for_given_date_in_gradebook_history_for_this_courseSearchParameters =
  Masquerade & Paginated;

type Options = {
  pathParams: details_for_given_date_in_gradebook_history_for_this_coursePathParameters;
} & (
  | {
      searchParams?: Partial<details_for_given_date_in_gradebook_history_for_this_courseSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: details_for_given_date_in_gradebook_history_for_this_courseSearchParameters;
      strict: true;
    }
);

/**
 * Details for a given date in gradebook history for this course
 *
 * Returns the graders who worked on this day, along with the assignments they
 * worked on. More details can be obtained by selecting a grader and assignment
 * and calling the 'submissions' api endpoint for a given date.
 *
 * Nickname: details_for_given_date_in_gradebook_history_for_this_course
 */
export async function details_for_given_date_in_gradebook_history_for_this_course(
  options: Options
) {
  const response = await client().fetchAs<Grader[]>(
    `/api/v1/courses/{course_id}/gradebook_history/{date}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
