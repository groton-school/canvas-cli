import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

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

type Options = (
  | {
      path: delete_conclude_coursePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_conclude_coursePathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_conclude_courseSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_conclude_courseSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_conclude_courseSearchParameters>;
        /** @deprecated Use {Options.query} */
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
  const response = await client().fetchAs<JSONValue>(`/api/v1/courses/{id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
