import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type submission_summary_sectionsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  section_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
};

export type submission_summary_sectionsSearchParameters = Masquerade &
  Partial<{
    /**
     * If this argument is true, the response will take into account student
     * groups.
     *
     * Type: boolean
     */
    grouped: boolean | string;
    /**
     * If this argument is true, the response will include deactivated students
     * in the summary (defaults to false).
     *
     * Type: boolean
     */
    include_deactivated: boolean | string;
  }>;

type Options = (
  | {
      path: submission_summary_sectionsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: submission_summary_sectionsPathParameters;
    }
) &
  (
    | {
        query?: Partial<submission_summary_sectionsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<submission_summary_sectionsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: submission_summary_sectionsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: submission_summary_sectionsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Submission Summary
 *
 * Returns the number of submissions for the given assignment based on gradeable
 * students that fall into three categories: graded, ungraded, not submitted.
 *
 * Nickname: submission_summary_sections
 */
export async function submission_summary_sections(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submission_summary`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
