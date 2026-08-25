import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { BlueprintRestriction } from '../../../../../Resources/BlueprintCourses.js';

export type set_or_remove_restrictions_on_blueprint_course_objectPathParameters =
  {
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
    template_id: string | number;
  };

export type set_or_remove_restrictions_on_blueprint_course_objectSearchParameters =
  Masquerade;

export type set_or_remove_restrictions_on_blueprint_course_objectFormParameters =
  Masquerade & {
    /**
     * [String, &quot;assignment&quot;|&quot;attachment&quot;|&quot;discussion_topic&quot;|&quot;external_tool&quot;|&quot;lti-quiz&quot;|&quot;quiz&quot;|&quot;wiki_page&quot;]
The type of the object.
     *
     * 
     *
     * 
     */
    content_type: string;
    /**
     * The ID of the object.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    content_id: number | string;
    /**
     * Whether to apply restrictions.
     *
     * type: boolean
     *
     *
     */
    restricted: boolean | string;
    /**
     * (Optional) If the object is restricted, this specifies a set of restrictions. If not specified,
the course-level restrictions will be used. See {api:CoursesController#update Course API update documentation}
     *
     * 
     *
     * 
     */
    restrictions: BlueprintRestriction;
  };

type Options = (
  | {
      path: set_or_remove_restrictions_on_blueprint_course_objectPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: set_or_remove_restrictions_on_blueprint_course_objectPathParameters;
    }
) &
  (
    | {
        query?: Partial<set_or_remove_restrictions_on_blueprint_course_objectSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<set_or_remove_restrictions_on_blueprint_course_objectSearchParameters>;
        body?: Partial<set_or_remove_restrictions_on_blueprint_course_objectFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<set_or_remove_restrictions_on_blueprint_course_objectFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: set_or_remove_restrictions_on_blueprint_course_objectSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: set_or_remove_restrictions_on_blueprint_course_objectSearchParameters;
          }
      ) &
        (
          | {
              body: set_or_remove_restrictions_on_blueprint_course_objectFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: set_or_remove_restrictions_on_blueprint_course_objectFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Set or remove restrictions on a blueprint course object
 *
 * If a blueprint course object is restricted, editing will be limited for copies in associated courses.
 *
 * nickname: set_or_remove_restrictions_on_blueprint_course_object
 *
 *
 *
 *
 */
export async function set_or_remove_restrictions_on_blueprint_course_object(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/blueprint_templates/{template_id}/restrict_item`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
