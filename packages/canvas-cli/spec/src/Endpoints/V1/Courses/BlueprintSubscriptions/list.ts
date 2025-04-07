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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/blueprint_subscriptions`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
