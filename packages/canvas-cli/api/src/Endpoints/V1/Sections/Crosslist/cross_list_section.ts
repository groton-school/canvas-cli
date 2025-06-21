import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Section } from '../../../../Resources/Sections.js';

export type cross_list_sectionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  new_course_id: string | number;
};

export type cross_list_sectionSearchParameters = Masquerade;

export type cross_list_sectionFormParameters = Masquerade & {
  /**
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   *
   * Type: boolean
   */
  override_sis_stickiness: boolean | string;
};

type Options = {
  pathParams: cross_list_sectionPathParameters;
} & (
  | {
      searchParams?: Partial<cross_list_sectionSearchParameters>;
      params?: Partial<cross_list_sectionFormParameters>;
      strict?: false;
    }
  | {
      searchParams: cross_list_sectionSearchParameters;
      params: cross_list_sectionFormParameters;
      strict: true;
    }
);

/**
 * Cross-list a Section
 *
 * Move the Section to another course. The new course may be in a different
 * account (department), but must belong to the same root account
 * (institution).
 *
 * Nickname: cross_list_section
 */
export async function cross_list_section(options: Options) {
  const response = await client().fetchAs<Section>(
    `/api/v1/sections/{id}/crosslist/{new_course_id}`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
