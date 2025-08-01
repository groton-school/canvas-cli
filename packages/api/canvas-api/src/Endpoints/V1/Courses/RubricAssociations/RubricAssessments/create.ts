import { JSONObject } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type createPathParameters = {
  /**
   * The id of the course
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
  /**
   * The id of the object with which this rubric assessment is associated
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  rubric_association_id: number | string;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * (optional) Indicates whether this assessment is provisional, defaults to
   * false.
   */
  provisional: string;
  /**
   * (optional) Indicates a provisional grade will be marked as final. It only
   * takes effect if the provisional param is passed as true. Defaults to
   * false.
   */
  final: string;
  /**
   * (optional) Defaults to false
   *
   * Type: boolean
   */
  graded_anonymously: boolean | string;
  /**
   * A Hash of data to complement the rubric assessment: The user id that
   * refers to the person being assessed rubric_assessment[user_id] Assessment
   * type. There are only three valid types: 'grading', 'peer_review', or
   * 'provisional_grade' rubric_assessment[assessment_type] The points awarded
   * for this row. rubric_assessment[criterion_id][points] Comments to add for
   * this row. rubric_assessment[criterion_id][comments] For each
   * criterion_id, change the id by the criterion number, ex: criterion_123 If
   * the criterion_id is not specified it defaults to false, and nothing is
   * updated.
   *
   * Hash
   */
  rubric_assessment: JSONObject;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a single rubric assessment
 *
 * Returns the rubric assessment with the given id. The returned object also
 * provides the information of :ratings, :assessor_name,
 * :related_group_submissions_and_assessments, :artifact
 *
 * Nickname: create_single_rubric_assessment
 */
export async function create(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
