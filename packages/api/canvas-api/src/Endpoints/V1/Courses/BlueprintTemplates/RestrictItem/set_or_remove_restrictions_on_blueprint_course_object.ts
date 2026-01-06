import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { BlueprintRestriction } from '../../../../../Resources/BlueprintCourses.js';

export type set_or_remove_restrictions_on_blueprint_course_objectPathParameters =
  {
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

export type set_or_remove_restrictions_on_blueprint_course_objectSearchParameters =
  Masquerade;

export type set_or_remove_restrictions_on_blueprint_course_objectFormParameters =
  Masquerade & {
    /**
     * [String,
     * "assignment"|"attachment"|"discussion_topic"|"external_tool"|"lti-quiz"|"quiz"|"wiki_page"]
     * The type of the object.
     */
    content_type: string;
    /**
     * The ID of the object.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    content_id: number | string;
    /**
     * Whether to apply restrictions.
     *
     * Type: boolean
     */
    restricted: boolean | string;
    /**
     * (Optional) If the object is restricted, this specifies a set of
     * restrictions. If not specified, the course-level restrictions will be
     * used. See {api:CoursesController#update Course API update documentation}
     */
    restrictions: BlueprintRestriction;
  };

type Options = {
  pathParams: set_or_remove_restrictions_on_blueprint_course_objectPathParameters;
} & (
  | {
      searchParams?: Partial<set_or_remove_restrictions_on_blueprint_course_objectSearchParameters>;
      params?: Partial<set_or_remove_restrictions_on_blueprint_course_objectFormParameters>;
      strict?: false;
    }
  | {
      searchParams: set_or_remove_restrictions_on_blueprint_course_objectSearchParameters;
      params: set_or_remove_restrictions_on_blueprint_course_objectFormParameters;
      strict: true;
    }
);

/**
 * Set or remove restrictions on a blueprint course object
 *
 * If a blueprint course object is restricted, editing will be limited for
 * copies in associated courses.
 *
 * Nickname: set_or_remove_restrictions_on_blueprint_course_object
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
