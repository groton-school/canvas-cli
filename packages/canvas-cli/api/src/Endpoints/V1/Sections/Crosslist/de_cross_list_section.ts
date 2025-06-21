import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Section } from '../../../../Resources/Sections.js';

export type de_cross_list_sectionPathParameters = {
  /** ID */
  id: string;
};

export type de_cross_list_sectionSearchParameters = Masquerade &
  Partial<{
    /**
     * Default is true. If false, any fields containing “sticky” changes will
     * not be updated. See SIS CSV Format documentation for information on which
     * fields can have SIS stickiness
     */
    override_sis_stickiness: boolean;
  }>;

type Options = {
  pathParams: de_cross_list_sectionPathParameters;
} & (
  | {
      searchParams?: Partial<de_cross_list_sectionSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: de_cross_list_sectionSearchParameters;
      strict: true;
    }
);

/**
 * De-cross-list a Section
 *
 * Undo cross-listing of a Section, returning it to its original course.
 *
 * Nickname: de_cross_list_section
 */
export async function de_cross_list_section(options: Options) {
  const response = await client().fetchAs<Section>(
    `/api/v1/sections/{id}/crosslist`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
