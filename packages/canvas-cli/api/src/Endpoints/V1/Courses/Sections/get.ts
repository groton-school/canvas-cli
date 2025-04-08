import { client } from '../../../../Client.js';
import { Section } from '../../../../Resources/Sections.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get section information
 *
 * Gets details about a specific section
 *
 * Nickname: get_section_information_courses
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<Section>(
    `/v1/courses/{course_id}/sections/{id}`,
    { method: 'GET', params: parameters }
  );
}
