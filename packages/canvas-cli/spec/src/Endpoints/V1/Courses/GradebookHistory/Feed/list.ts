import { SubmissionVersion } from '../../../../../Resources/GradebookHistory.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List uncollated submission versions
 *
 * Gives a paginated, uncollated list of submission versions for all matching
 * submissions in the context. This SubmissionVersion objects will not include
 * the +new_grade+ or +previous_grade+ keys, only the +grade+; same for
 * +graded_at+ and +grader+.
 *
 * Nickname: list_uncollated_submission_versions
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/gradebook_history/feed`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
