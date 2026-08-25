import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  assignment_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The learning object&#x27;s due date. Not applicable for ungraded discussions, pages, and files.
   *
   * format: date-time
   *
   *
   */
  due_at: string;
  /**
   * The learning object&#x27;s unlock date. Must be before the due date if there is one.
   *
   * format: date-time
   *
   *
   */
  unlock_at: string;
  /**
   * The learning object&#x27;s lock date. Must be after the due date if there is one.
   *
   * format: date-time
   *
   *
   */
  lock_at: string;
  /**
   * Whether the learning object is only assigned to students who are targeted by an override.
   *
   * type: boolean
   *
   *
   */
  only_visible_to_overrides: boolean | string;
  /**
     * List of overrides to apply to the learning object. Overrides that already exist should include
an ID and will be updated if needed. New overrides will be created for overrides in the list
without an ID. Overrides not included in the list will be deleted. Providing an empty list
will delete all of the object&#x27;s overrides. Keys for each override object can include: &#x27;id&#x27;,
&#x27;title&#x27;, &#x27;due_at&#x27;, &#x27;unlock_at&#x27;, &#x27;lock_at&#x27;, &#x27;student_ids&#x27;, and &#x27;course_section_id&#x27;, &#x27;course_id&#x27;,
&#x27;noop_id&#x27;, and &#x27;unassign_item&#x27;.
     *
     * 
     *
     * 
     */
  assignment_overrides: string[];
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update a learning object&#x27;s date information
 *
 * Updates date-related information for learning objects, including due date, availability dates,
override status, and assignment overrides.

Returns 204 No Content response code if successful.
 *
 * nickname: update_learning_object_s_date_information_assignments
 *
 * 
 *
 * 
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/date_details`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
