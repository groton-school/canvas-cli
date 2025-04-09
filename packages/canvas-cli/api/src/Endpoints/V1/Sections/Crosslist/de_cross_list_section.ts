import { client } from '../../../../Client.js';
import { Section } from '../../../../Resources/Sections.js';

export type de_cross_list_sectionPathParameters = {
  /** ID */
  id: string;
};

export type de_cross_list_sectionSearchParameters = {
  /**
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   */
  override_sis_stickiness: boolean;
};

type Options = {
  pathParams: de_cross_list_sectionPathParameters;
  searchParams?: de_cross_list_sectionSearchParameters;
};

/**
 * De-cross-list a Section
 *
 * Undo cross-listing of a Section, returning it to its original course.
 *
 * Nickname: de_cross_list_section
 */
export async function de_cross_list_section({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<Section>(`/v1/sections/{id}/crosslist`, {
    method: 'DELETE',
    pathParams,
    searchParams
  });
}
