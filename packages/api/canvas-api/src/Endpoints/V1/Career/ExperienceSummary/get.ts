import { client, Masquerade } from '#client';
import { ExperienceSummary } from '../../../../Resources/CanvasCareerExperiences.js';

export type getSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<getSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: getSearchParameters;
        }
      | {
          /** @deprecated Use {Options.query} */
          searchParams: getSearchParameters;
        }
    ) & {
      strict: true;
    });

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
