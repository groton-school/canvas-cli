import { client } from '../../../../Client.js';
import { Progress } from '../../../../Resources/CoursePace.js';

export type cancel_progressPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: cancel_progressPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Cancel progress
 *
 * Cancel an asynchronous job associated with a Progress object If you include
 * "message" in the POSTed data, it will be set on the Progress and returned.
 * This is handy to distinguish between cancel and fail for a workflow_state of
 * "failed".
 *
 * Nickname: cancel_progress
 */
export async function cancel_progress(options: Options) {
  return await client().fetchAs<Progress>(`/api/v1/progress/{id}/cancel`, {
    method: 'POST',
    ...options
  });
}
