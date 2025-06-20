import { client } from '../../../../Client.js';

export type set_outcome_ordering_for_lmgbPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: set_outcome_ordering_for_lmgbPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/assign_outcome_order`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
