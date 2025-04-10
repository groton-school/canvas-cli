import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get course settings
 *
 * Returns some of a course's settings.
 *
 * Nickname: get_course_settings
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/settings`, {
    method: 'GET',
    pathParams
  });
}
