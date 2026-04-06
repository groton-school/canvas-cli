import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

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

type Options = (
  | {
      path: redirect_to_assignment_override_for_sectionPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: redirect_to_assignment_override_for_sectionPathParameters;
    }
) &
  (
    | {
        query?: Partial<redirect_to_assignment_override_for_sectionSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<redirect_to_assignment_override_for_sectionSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: redirect_to_assignment_override_for_sectionSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: redirect_to_assignment_override_for_sectionSearchParameters;
          }
      ) & {
        strict: true;
      })
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/sections/{course_section_id}/assignments/{assignment_id}/override`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
