import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { RubricAssociation } from '../../../../Resources/Rubrics.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * The id of the RubricAssociation to update
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The id of the Rubric
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'rubric_association[rubric_id]': number | string;
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
  /** The name of the object this rubric is associated with */
  'rubric_association[title]': string;
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
   * Whether or not the associated rubric appears in its context
   *
   * Type: boolean
   */
  'rubric_association[bookmarked]': boolean | string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a RubricAssociation
 *
 * Returns the rubric with the given id.
 *
 * Nickname: update_rubricassociation
 */
export async function update(options: Options) {
  const response = await client().fetchAs<RubricAssociation>(
    `/api/v1/courses/{course_id}/rubric_associations/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
