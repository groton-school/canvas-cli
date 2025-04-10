import { client } from '../../../../Client.js';
import { Proficiency } from '../../../../Resources/ProficiencyRatings.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
};

export type createFormParameters = {
  /** The description of the rating level. */
  'ratings[description]': string[];
  /**
   * The non-negative number of points of the rating level. Points across
   * ratings should be strictly decreasing in value.
   *
   * Format: 'int64'
   */
  'ratings[points]': number[];
  /**
   * Indicates the rating level where mastery is first achieved. Only one
   * rating in a proficiency should be marked for mastery.
   *
   * Format: 'int64'
   */
  'ratings[mastery]': number[];
  /**
   * The color associated with the rating level. Should be a hex color code
   * like '00FFFF'.
   *
   * Format: 'int64'
   */
  'ratings[color]': number[];
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params?: createFormParameters;
      strict: true;
    }
);

/**
 * Create/update proficiency ratings
 *
 * Create or update account-level proficiency ratings. These ratings will apply
 * to all sub-accounts, unless they have their own account-level proficiency
 * ratings defined.
 *
 * Nickname: create_update_proficiency_ratings_courses
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<Proficiency>(
    `/v1/courses/{course_id}/outcome_proficiency`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
