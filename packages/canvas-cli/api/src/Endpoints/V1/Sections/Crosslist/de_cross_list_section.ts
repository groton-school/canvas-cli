import { client } from '../../../../Client.js';
import { Section } from '../../../../Resources/Sections.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * De-cross-list a Section
 *
 * Undo cross-listing of a Section, returning it to its original course.
 *
 * Nickname: de_cross_list_section
 */
export async function de_cross_list_section({ parameters }: Options) {
  return await client().fetchAs<Section>(`/v1/sections/{id}/crosslist`, {
    method: 'DELETE',
    params: parameters
  });
}
