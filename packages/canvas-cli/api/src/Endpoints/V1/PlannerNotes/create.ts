import { client } from '../../../Client.js';
import { PlannerNote } from '../../../Resources/Planner.js';

export type createFormParameters = {
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
   * Format: 'int64'
   */
  course_id: number;
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
   * Format: 'int64'
   */
  linked_object_id: number;
};

type Options = {
  params?: createFormParameters;
};

/**
 * Create a planner note
 *
 * Create a planner note for the current user
 *
 * Nickname: create_planner_note
 */
export async function create({ params }: Options) {
  return await client().fetchAs<PlannerNote>(`/v1/planner_notes`, {
    method: 'POST',
    params
  });
}
