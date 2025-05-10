import { client } from '../../../../../Client.js';

export type submission_summary_sectionsPathParameters = {
  /** ID */
  section_id: string;
  /** ID */
  assignment_id: string;
};

export type submission_summary_sectionsSearchParameters = Partial<{
  /**
   * If this argument is true, the response will take into account student
   * groups.
   */
  grouped: boolean;
}>;

type Options = {
  pathParams: submission_summary_sectionsPathParameters;
} & (
  | {
      searchParams?: Partial<submission_summary_sectionsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: submission_summary_sectionsSearchParameters;
      strict: true;
    }
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
  return await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submission_summary`,
    {
      method: 'GET',
      ...options
    }
  );
}
