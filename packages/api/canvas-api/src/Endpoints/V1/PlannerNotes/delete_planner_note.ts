import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { PlannerNote } from '../../../Resources/Planner.js';

export type delete_planner_notePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_planner_noteSearchParameters = Masquerade;

type Options = {
  pathParams: delete_planner_notePathParameters;
} & (
  | {
      searchParams?: Partial<delete_planner_noteSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_planner_noteSearchParameters;
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
