import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../Client.js';
import { PlannerNote } from '../../../Resources/Planner.js';

export type listSearchParameters = {
  /**
   * Only return notes with todo dates since the start_date (inclusive). No
   * default. The value should be formatted as: yyyy-mm-dd or ISO 8601
   * YYYY-MM-DDTHH:MM:SSZ.
   *
   * Format: date-time
   */
  start_date: string;
  /**
   * Only return notes with todo dates before the end_date (inclusive). No
   * default. The value should be formatted as: yyyy-mm-dd or ISO 8601
   * YYYY-MM-DDTHH:MM:SSZ. If end_date and start_date are both specified and
   * equivalent, then only notes with todo dates on that day are returned.
   *
   * Format: date-time
   */
  end_date: string;
  /**
   * List of context codes of courses whose notes you want to see. If not
   * specified, defaults to all contexts that the user belongs to. The format
   * of this field is the context type, followed by an underscore, followed by
   * the context id. For example: course_42 Including a code matching the
   * user's own context code (e.g. user_1) will include notes that are not
   * associated with any particular course.
   */
  context_codes: string[];
} & Paginated;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List planner notes
 *
 * Retrieve the paginated list of planner notes
 *
 * Retrieve planner note for a user
 *
 * Nickname: list_planner_notes
 */
export async function list(options: Options) {
  return await client().fetchAs<PlannerNote[]>(`/api/v1/planner_notes`, {
    method: 'GET',
    ...options
  });
}
