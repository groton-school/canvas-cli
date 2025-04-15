import { client } from '../../../../Client.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Create or find a live assessment
 *
 * Creates or finds an existing live assessment with the given key and aligns it
 * with the linked outcome
 *
 * Nickname: create_or_find_live_assessment
 */
export async function create(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/live_assessments`,
    {
      method: 'POST',
      ...options
    }
  );
}
