import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';

export type delete_conclude_coursePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_conclude_courseSearchParameters = Masquerade &
  Partial<{
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
  const response = await client().fetchAs<void>(`/api/v1/courses/{id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
