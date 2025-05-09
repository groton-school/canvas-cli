import { client } from '../../../../Client.js';
import { RubricAssociation } from '../../../../Resources/Rubrics.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
};

export type createFormParameters = {
  /**
   * The id of the Rubric
   *
   * Format: 'int64'
   */
  'rubric_association[rubric_id]': number;
  /**
   * The id of the object with which this rubric is associated
   *
   * Format: 'int64'
   */
  'rubric_association[association_id]': number;
  /** The type of object this rubric is associated with */
  'rubric_association[association_type]': string;
  /** The name of the object this rubric is associated with */
  'rubric_association[title]': string;
  /** Whether or not the associated rubric is used for grade calculation */
  'rubric_association[use_for_grading]': boolean;
  /**
   * Whether or not the score total is displayed within the rubric. This
   * option is only available if the rubric is not used for grading.
   */
  'rubric_association[hide_score_total]': boolean;
  /**
   * Whether or not the association is for grading (and thus linked to an
   * assignment) or if it's to indicate the rubric should appear in its
   * context
   */
  'rubric_association[purpose]': string;
  /** Whether or not the associated rubric appears in its context */
  'rubric_association[bookmarked]': boolean;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a RubricAssociation
 *
 * Returns the rubric with the given id.
 *
 * Nickname: create_rubricassociation
 */
export async function create(options: Options) {
  return await client().fetchAs<RubricAssociation>(
    `/api/v1/courses/{course_id}/rubric_associations`,
    {
      method: 'POST',
      ...options
    }
  );
}
