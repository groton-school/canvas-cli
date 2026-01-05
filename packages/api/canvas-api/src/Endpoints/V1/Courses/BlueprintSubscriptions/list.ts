import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { BlueprintSubscription } from '../../../../Resources/BlueprintCourses.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
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
export async function list(options: Options) {
  const response = await client().fetchAs<BlueprintSubscription[]>(
    `/api/v1/courses/{course_id}/blueprint_subscriptions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
