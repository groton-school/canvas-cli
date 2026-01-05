import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { Section } from '../../../Resources/Sections.js';

export type delete_sectionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_sectionSearchParameters = Masquerade;

type Options = {
  pathParams: delete_sectionPathParameters;
} & (
  | {
      searchParams?: Partial<delete_sectionSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_sectionSearchParameters;
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
