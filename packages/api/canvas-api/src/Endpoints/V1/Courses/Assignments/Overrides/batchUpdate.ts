import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

export type batchUpdatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type batchUpdateSearchParameters = Masquerade & Paginated;

export type batchUpdateFormParameters = Masquerade & {
  /** Attributes for the updated overrides. */
  assignment_overrides: AssignmentOverride[];
};

type Options = (
  | {
      path: batchUpdatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: batchUpdatePathParameters;
    }
) &
  (
    | {
        query?: Partial<batchUpdateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<batchUpdateSearchParameters>;
        body?: Partial<batchUpdateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<batchUpdateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: batchUpdateSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: batchUpdateSearchParameters;
          }
      ) &
        (
          | {
              body: batchUpdateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: batchUpdateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Batch update overrides in a course
 *
 * Updates a list of specified overrides for each assignment. Handles overrides
 * in a transaction, so either all updates are applied or none. See
 * {api:AssignmentOverridesController#update Update an assignment override} for
 * available attributes.
 *
 * All current overridden values must be supplied if they are to be retained;
 * e.g. if due_at was overridden, but this PUT omits a value for due_at, due_at
 * will no longer be overridden. If the override is adhoc and student_ids is not
 * supplied, the target override set is unchanged. Target override sets cannot
 * be changed for group or section overrides.
 *
 * Errors are reported in an errors attribute, an array of errors corresponding
 * to inputs. Global errors will be reported as a single element errors array
 *
 * Nickname: batch_update_overrides_in_course
 */
export async function batchUpdate(options: Options) {
  const response = await client().fetchAs<AssignmentOverride[]>(
    `/api/v1/courses/{course_id}/assignments/overrides`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
