import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List LTI Launch Definitions
 *
 * List all tools available in this context for the given placements, in the
 * form of Launch Definitions. Used primarily by the Canvas frontend. API users
 * should consider using the External Tools API instead. This endpoint is cached
 * for 10 minutes!
 *
 * Nickname: list_lti_launch_definitions_courses
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/lti_apps/launch_definitions`,
    { method: 'GET', params: parameters }
  );
}
