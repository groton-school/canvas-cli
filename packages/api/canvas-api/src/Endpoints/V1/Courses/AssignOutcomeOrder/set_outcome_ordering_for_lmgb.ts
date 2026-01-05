import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type set_outcome_ordering_for_lmgbPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type set_outcome_ordering_for_lmgbSearchParameters = Masquerade;

type Options = {
  pathParams: set_outcome_ordering_for_lmgbPathParameters;
} & (
  | {
      searchParams?: Partial<set_outcome_ordering_for_lmgbSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: set_outcome_ordering_for_lmgbSearchParameters;
      strict: true;
    }
);

/**
 * Set outcome ordering for LMGB
 *
 * Saves the ordering of outcomes in LMGB for a user
 *
 * Nickname: set_outcome_ordering_for_lmgb
 */
export async function set_outcome_ordering_for_lmgb(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assign_outcome_order`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
