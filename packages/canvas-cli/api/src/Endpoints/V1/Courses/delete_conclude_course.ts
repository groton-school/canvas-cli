import { client } from '../../../Client.js';

export type delete_conclude_coursePathParameters = {
  /** ID */
  id: string;
};

export type delete_conclude_courseSearchParameters = Partial<{
  /** The action to take on the course. */
  event: string;
}>;

type Options = {
  pathParams: delete_conclude_coursePathParameters;
} & (
  | {
      searchParams?: Partial<delete_conclude_courseSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_conclude_courseSearchParameters;
      strict: true;
    }
);

/**
 * Delete/Conclude a course
 *
 * Delete or conclude an existing course
 *
 * Nickname: delete_conclude_course
 */
export async function delete_conclude_course(options: Options) {
  return await client().fetchAs<void>(`/api/v1/courses/{id}`, {
    method: 'DELETE',
    ...options
  });
}
