import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { PlannerNote } from '../../../Resources/Planner.js';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The title of the planner note. */
  title: string;
  /** Text of the planner note. */
  details: string;
  /**
   * The date where this planner note should appear in the planner. The value
   * should be formatted as: yyyy-mm-dd.
   *
   * Format: date
   */
  todo_date: string;
  /**
   * The ID of the course to associate with the planner note. The caller must
   * be able to view the course in order to associate it with a planner note.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
  /**
   * The type of a learning object to link to this planner note. Must be used
   * in conjunction wtih linked_object_id and course_id. Valid
   * linked_object_type values are: 'announcement', 'assignment',
   * 'discussion_topic', 'wiki_page', 'quiz'
   */
  linked_object_type: string;
  /**
   * The id of a learning object to link to this planner note. Must be used in
   * conjunction with linked_object_type and course_id. The object must be in
   * the same course as specified by course_id. If the title argument is not
   * provided, the planner note will use the learning object's title as its
   * title. Only one planner note may be linked to a specific learning
   * object.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  linked_object_id: number | string;
};

type Options =
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    };

/**
 * Create a planner note
 *
 * Create a planner note for the current user
 *
 * Nickname: create_planner_note
 */
export async function create(options: Options) {
  const response = await client().fetchAs<PlannerNote>(
    `/api/v1/planner_notes`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
