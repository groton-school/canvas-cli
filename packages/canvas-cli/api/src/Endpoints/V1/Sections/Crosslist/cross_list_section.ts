import { client } from '../../../../Client.js';
import { Section } from '../../../../Resources/Sections.js';

export type cross_list_sectionPathParameters = {
  /** ID */
  id: string;
  /** ID */
  new_course_id: string;
};

export type cross_list_sectionFormParameters = {
  /**
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   */
  override_sis_stickiness: boolean;
};

type Options = {
  pathParams: cross_list_sectionPathParameters;
} & (
  | {
      params?: Partial<cross_list_sectionFormParameters>;
      strict?: false;
    }
  | {
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
  return await client().fetchAs<Section>(
    `/api/v1/sections/{id}/crosslist/{new_course_id}`,
    {
      method: 'POST',
      ...options
    }
  );
}
