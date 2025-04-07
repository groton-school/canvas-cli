import { BlueprintRestriction } from '../../../../../Resources/BlueprintCourses.js';

type Parameters = {
  /**
   * [String,
   * "assignment"|"attachment"|"discussion_topic"|"external_tool"|"lti-quiz"|"quiz"|"wiki_page"]
   * The type of the object.
   */
  content_type: string;
  /**
   * The ID of the object.
   *
   * Format: int64
   */
  content_id: number;
  /** Whether to apply restrictions. */
  restricted: boolean;
  /**
   * (Optional) If the object is restricted, this specifies a set of
   * restrictions. If not specified, the course-level restrictions will be
   * used. See {api:CoursesController#update Course API update documentation}
   */
  restrictions: BlueprintRestriction;
};

type Options = {
  parameters: Parameters;
};

/**
 * Set or remove restrictions on a blueprint course object
 *
 * If a blueprint course object is restricted, editing will be limited for
 * copies in associated courses.
 *
 * Nickname: set_or_remove_restrictions_on_blueprint_course_object
 */
export async function set_or_remove_restrictions_on_blueprint_course_object({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/blueprint_templates/{template_id}/restrict_item`,
      { method: 'PUT', body: parameters }
    )
  ).json();
}
