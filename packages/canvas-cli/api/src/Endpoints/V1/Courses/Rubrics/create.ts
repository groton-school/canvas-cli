import { JSONObject } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The id of the rubric
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /**
   * The id of the rubric association object (not the course/assignment
   * itself, but the join table record id). It can be used in place of
   * rubric_association[association_id] and
   * rubric_association[association_type] if desired.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  rubric_association_id: number | string;
  /** The title of the rubric */
  'rubric[title]': string;
  /**
   * Whether or not you can write custom comments in the ratings field for a
   * rubric
   *
   * Type: boolean
   */
  'rubric[free_form_criterion_comments]': boolean | string;
  /**
   * The id of the object with which this rubric is associated
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'rubric_association[association_id]': number | string;
  /** The type of object this rubric is associated with */
  'rubric_association[association_type]': string;
  /**
   * Whether or not the associated rubric is used for grade calculation
   *
   * Type: boolean
   */
  'rubric_association[use_for_grading]': boolean | string;
  /**
   * Whether or not the score total is displayed within the rubric. This
   * option is only available if the rubric is not used for grading.
   *
   * Type: boolean
   */
  'rubric_association[hide_score_total]': boolean | string;
  /**
   * Whether or not the association is for grading (and thus linked to an
   * assignment) or if it's to indicate the rubric should appear in its
   * context
   */
  'rubric_association[purpose]': string;
  /**
   * An indexed Hash of RubricCriteria objects where the keys are integer ids
   * and the values are the RubricCriteria objects
   *
   * Hash
   */
  'rubric[criteria]': JSONObject;
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
 * Create a single rubric
 *
 * Returns the rubric with the given id.
 *
 * Unfortuantely this endpoint does not return a standard Rubric object, instead
 * it returns a hash that looks like { 'rubric': Rubric, 'rubric_association':
 * RubricAssociation }
 *
 * This may eventually be deprecated in favor of a more standardized return
 * value, but that is not currently planned.
 *
 * TODO: document once feature is public: rubric[criteria_via_llm] [Boolean]
 * When true, rubric[criteria] will be ignored (does not need to be included at
 * all). Instead, rubric criteria will be automatically generated from a large
 * language model (llm).
 *
 * Nickname: create_single_rubric
 */
export async function create(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/rubrics`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
