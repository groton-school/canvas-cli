import { client } from '../../../Client.js';
import { PlannerNote } from '../../../Resources/Planner.js';

export type delete_planner_notePathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_planner_notePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a planner note
 *
 * Delete a planner note for the current user
 *
 * Nickname: delete_planner_note
 */
export async function delete_planner_note(options: Options) {
  const response = await client().fetchAs<PlannerNote>(
    `/api/v1/planner_notes/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
