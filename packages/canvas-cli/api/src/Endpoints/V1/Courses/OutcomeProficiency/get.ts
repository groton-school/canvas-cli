import { client } from '../../../../Client.js';
import { Proficiency } from '../../../../Resources/ProficiencyRatings.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get proficiency ratings
 *
 * Get account-level proficiency ratings. If not defined for this account, it
 * will return proficiency ratings for the nearest super-account with ratings
 * defined. Will return 404 if none found.
 *
 * Examples: curl
 * https://<canvas>/api/v1/accounts/<account_id>/outcome_proficiency\
 * -H 'Authorization: Bearer <token>'
 *
 * Nickname: get_proficiency_ratings_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Proficiency>(
    `/api/v1/courses/{course_id}/outcome_proficiency`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
