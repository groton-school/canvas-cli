import { client } from '../../../Client.js';
import { PlannerNote } from '../../../Resources/Planner.js';

type Parameters = {
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
   * Use a null or empty value to remove a planner note from a course. Note
   * that if the planner note is linked to a learning object, its course_id
   * cannot be changed.
   *
   * Format: 'int64'
   */
  course_id: number;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a planner note
 *
 * Update a planner note for the current user
 *
 * Nickname: update_planner_note
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<PlannerNote>(`/v1/planner_notes/{id}`, {
    method: 'PUT',
    params: parameters
  });
}
