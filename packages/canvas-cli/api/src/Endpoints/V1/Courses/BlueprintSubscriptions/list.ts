import { client } from '../../../../Client.js';
import { BlueprintSubscription } from '../../../../Resources/BlueprintCourses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List blueprint subscriptions
 *
 * Returns a list of blueprint subscriptions for the given course. (Currently a
 * course may have no more than one.)
 *
 * Nickname: list_blueprint_subscriptions
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/blueprint_subscriptions`,
    { method: 'GET', params: parameters }
  );
}
