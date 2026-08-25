import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Section } from '../../../Resources/Sections.js';

export type delete_sectionPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type delete_sectionSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_sectionPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_sectionPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_sectionSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_sectionSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_sectionSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_sectionSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a section
 *
 * Delete an existing section.  Returns the former Section.
 *
 * nickname: delete_section
 *
 *
 *
 *
 */
export async function delete_section(options: Options) {
  const response = await client().fetchAs<Section>(`/api/v1/sections/{id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
