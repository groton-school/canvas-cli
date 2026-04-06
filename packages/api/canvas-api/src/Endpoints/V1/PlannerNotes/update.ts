import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { PlannerNote } from '../../../Resources/Planner.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
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
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: updateSearchParameters;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: updateFormParameters;
        strict: true;
      }
  );

/**
 * Update a planner note
 *
 * Update a planner note for the current user
 *
 * Nickname: update_planner_note
 */
export async function update(options: Options) {
  const response = await client().fetchAs<PlannerNote>(
    `/api/v1/planner_notes/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
