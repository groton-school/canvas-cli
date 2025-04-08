import { JSONObject } from '@battis/typescript-tricks';
import { client } from '../../../../Client.js';

type Parameters = {
  /**
   * The id of the rubric
   *
   * Format: 'int64'
   */
  id: number;
  /**
   * The id of the rubric association object (not the course/assignment
   * itself, but the join table record id). It can be used in place of
   * rubric_association[association_id] and
   * rubric_association[association_type] if desired.
   *
   * Format: 'int64'
   */
  rubric_association_id: number;
  /** The title of the rubric */
  'rubric[title]': string;
  /**
   * Whether or not you can write custom comments in the ratings field for a
   * rubric
   */
  'rubric[free_form_criterion_comments]': boolean;
  /**
   * The id of the object with which this rubric is associated
   *
   * Format: 'int64'
   */
  'rubric_association[association_id]': number;
  /** The type of object this rubric is associated with */
  'rubric_association[association_type]': string;
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
  /**
   * An indexed Hash of RubricCriteria objects where the keys are integer ids
   * and the values are the RubricCriteria objects
   *
   * Hash
   */
  'rubric[criteria]': JSONObject;
};

type Options = {
  parameters: Parameters;
};

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
export async function create({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/rubrics`, {
    method: 'POST',
    params: parameters
  });
}
