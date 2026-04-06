import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Section } from '../../../Resources/Sections.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The name of the section */
  'course_section[name]': string;
  /** The sis ID of the section. Must have manage_sis permission to set. */
  'course_section[sis_section_id]': string;
  /**
   * The integration_id of the section. Must have manage_sis permission to
   * set.
   */
  'course_section[integration_id]': string;
  /**
   * Section start date in ISO8601 format, e.g. 2011-01-01T01:00Z
   *
   * Format: date-time
   */
  'course_section[start_at]': string;
  /**
   * Section end date in ISO8601 format. e.g. 2011-01-01T01:00Z
   *
   * Format: date-time
   */
  'course_section[end_at]': string;
  /**
   * Set to true to restrict user enrollments to the start and end dates of
   * the section.
   *
   * Type: boolean
   */
  'course_section[restrict_enrollments_to_section_dates]': boolean | string;
  /**
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   *
   * Type: boolean
   */
  override_sis_stickiness: boolean | string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Edit a section
 *
 * Modify an existing section.
 *
 * Nickname: edit_section
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Section>(`/api/v1/sections/{id}`, {
    method: 'PUT',
    ...options
  });
  return response;
}
