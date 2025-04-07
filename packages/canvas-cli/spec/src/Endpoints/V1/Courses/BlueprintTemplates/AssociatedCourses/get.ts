import { Course } from '../../../../../Resources/Courses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get associated course information
 *
 * Returns a list of courses that are configured to receive updates from this
 * blueprint
 *
 * Nickname: get_associated_course_information
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/blueprint_templates/{template_id}/associated_courses`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
