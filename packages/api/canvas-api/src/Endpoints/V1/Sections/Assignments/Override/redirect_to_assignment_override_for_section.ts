import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type redirect_to_assignment_override_for_sectionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_section_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
};

export type redirect_to_assignment_override_for_sectionSearchParameters =
  Masquerade;

type Options = {
  pathParams: redirect_to_assignment_override_for_sectionPathParameters;
} & (
  | {
      searchParams?: Partial<redirect_to_assignment_override_for_sectionSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: redirect_to_assignment_override_for_sectionSearchParameters;
      strict: true;
    }
);

/**
 * Redirect to the assignment override for a section
 *
 * Responds with a redirect to the override for the given section, if any (404
 * otherwise).
 *
 * Nickname: redirect_to_assignment_override_for_section
 */
export async function redirect_to_assignment_override_for_section(
  options: Options
) {
  const response = await client().fetchAs<void>(
    `/api/v1/sections/{course_section_id}/assignments/{assignment_id}/override`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
