import { Section } from '../../../../Resources/Sections.js';

type Parameters = {
  /**
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   */
  override_sis_stickiness: boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Cross-list a Section
 *
 * Move the Section to another course. The new course may be in a different
 * account (department), but must belong to the same root account
 * (institution).
 *
 * Nickname: cross_list_section
 */
export async function cross_list_section({
  parameters
}: Options): Promise<Section> {
  return await (
    await fetch(`/v1/sections/{id}/crosslist/{new_course_id}`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
