import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';

export type enqueue_delayed_outcome_rollup_calculation_jobSearchParameters =
  Masquerade;

export type enqueue_delayed_outcome_rollup_calculation_jobFormParameters =
  Masquerade & {
    /** The course ID for the rollup job */
    course_id: string;
    /**
     * The student UUID for the rollup job. If provided, calculates for specific
     * student.
     */
    student_uuid: string;
  };

type Options =
  | {
      searchParams?: Partial<enqueue_delayed_outcome_rollup_calculation_jobSearchParameters>;
      params?: Partial<enqueue_delayed_outcome_rollup_calculation_jobFormParameters>;
      strict?: false;
    }
  | {
      searchParams: enqueue_delayed_outcome_rollup_calculation_jobSearchParameters;
      params: enqueue_delayed_outcome_rollup_calculation_jobFormParameters;
      strict: true;
    };

/**
 * Enqueue a delayed Outcome Rollup Calculation Job
 *
 * Nickname: enqueue_delayed_outcome_rollup_calculation_job
 */
export async function enqueue_delayed_outcome_rollup_calculation_job(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/enqueue_outcome_rollup_calculation`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
