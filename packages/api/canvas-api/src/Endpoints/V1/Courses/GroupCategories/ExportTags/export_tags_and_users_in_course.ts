import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type export_tags_and_users_in_coursePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type export_tags_and_users_in_courseSearchParameters = Masquerade;

type Options = (
  | {
      path: export_tags_and_users_in_coursePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: export_tags_and_users_in_coursePathParameters;
    }
) &
  (
    | {
        query?: Partial<export_tags_and_users_in_courseSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<export_tags_and_users_in_courseSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: export_tags_and_users_in_courseSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: export_tags_and_users_in_courseSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Export tags and users in course
 *
 * Returns a csv file of users in format ready to import.
 *
 * Nickname: export_tags_and_users_in_course
 */
export async function export_tags_and_users_in_course(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/group_categories/export_tags`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
