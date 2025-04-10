import { client } from '../../../../Client.js';
import { BlueprintSubscription } from '../../../../Resources/BlueprintCourses.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List blueprint subscriptions
 *
 * Returns a list of blueprint subscriptions for the given course. (Currently a
 * course may have no more than one.)
 *
 * Nickname: list_blueprint_subscriptions
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/blueprint_subscriptions`,
    {
      method: 'GET',
      pathParams
    }
  );
}
