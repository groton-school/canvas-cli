import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Proficiency } from '../../../../Resources/ProficiencyRatings.js';

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
  /** The description of the rating level. */
  'ratings[description]': string[];
  /**
   * The non-negative number of points of the rating level. Points across
   * ratings should be strictly decreasing in value.
   *
   * Format: 'int64'
   */
  'ratings[points]': number | string[];
  /**
   * Indicates the rating level where mastery is first achieved. Only one
   * rating in a proficiency should be marked for mastery.
   *
   * Format: 'int64'
   */
  'ratings[mastery]': number | string[];
  /**
   * The color associated with the rating level. Should be a hex color code
   * like '00FFFF'.
   *
   * Format: 'int64'
   */
  'ratings[color]': number | string[];
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
 * Create/update proficiency ratings
 *
 * Create or update account-level proficiency ratings. These ratings will apply
 * to all sub-accounts, unless they have their own account-level proficiency
 * ratings defined.
 *
 * Nickname: create_update_proficiency_ratings_courses
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Proficiency>(
    `/api/v1/courses/{course_id}/outcome_proficiency`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
