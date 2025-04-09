import { client } from '../../../Client.js';
import { Section } from '../../../Resources/Sections.js';

export type delete_sectionPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_sectionPathParameters;
};

/**
 * Delete a section
 *
 * Delete an existing section. Returns the former Section.
 *
 * Nickname: delete_section
 */
export async function delete_section({ pathParams }: Options) {
  return await client().fetchAs<Section>(`/v1/sections/{id}`, {
    method: 'DELETE',
    pathParams
  });
}
