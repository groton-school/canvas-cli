import { Section } from '../../../../Resources/Sections.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List course sections
 *
 * A paginated list of the list of sections for this course.
 *
 * Nickname: list_course_sections
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/sections`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
