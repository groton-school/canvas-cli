import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  template_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * Courses to add as associated courses
   *
   * Array
   */
  course_ids_to_add: string[];
  /**
   * Courses to remove as associated courses
   *
   * Array
   */
  course_ids_to_remove: string[];
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
 * Update associated courses
 *
 * Send a list of course ids to add or remove new associations for the template.
 * Cannot add courses that do not belong to the blueprint course's account. Also
 * cannot add other blueprint courses or courses that already have an
 * association with another blueprint course.
 *
 * After associating new courses,
 * {api:MasterCourses::MasterTemplatesController#queue_migration start a sync}
 * to populate their contents from the blueprint.
 *
 * Nickname: update_associated_courses
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/blueprint_templates/{template_id}/update_associations`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
