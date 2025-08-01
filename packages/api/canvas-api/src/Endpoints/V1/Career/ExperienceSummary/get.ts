import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { ExperienceSummary } from '../../../../Resources/CanvasCareerExperiences.js';

export type getSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    };

/**
 * Get current and available experiences
 *
 * Returns the current user's active experience and available experiences they
 * can switch to.
 *
 * Nickname: get_current_and_available_experiences
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ExperienceSummary>(
    `/api/v1/career/experience_summary`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
