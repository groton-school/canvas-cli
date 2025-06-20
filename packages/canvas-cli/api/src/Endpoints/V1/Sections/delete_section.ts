import { client } from '../../../Client.js';
import { Section } from '../../../Resources/Sections.js';

export type delete_sectionPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_sectionPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a section
 *
 * Delete an existing section. Returns the former Section.
 *
 * Nickname: delete_section
 */
export async function delete_section(options: Options) {
  const response = await client().fetchAs<Section>(`/api/v1/sections/{id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
