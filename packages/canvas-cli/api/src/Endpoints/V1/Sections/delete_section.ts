import { client } from '../../../Client.js';
import { Section } from '../../../Resources/Sections.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a section
 *
 * Delete an existing section. Returns the former Section.
 *
 * Nickname: delete_section
 */
export async function delete_section({ parameters }: Options) {
  return await client().fetchAs<Section>(`/v1/sections/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
