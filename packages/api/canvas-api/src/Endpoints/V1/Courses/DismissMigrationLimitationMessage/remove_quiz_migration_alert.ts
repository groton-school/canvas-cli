import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type remove_quiz_migration_alertPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type remove_quiz_migration_alertSearchParameters = Masquerade;

type Options = (
  | {
      path: remove_quiz_migration_alertPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: remove_quiz_migration_alertPathParameters;
    }
) &
  (
    | {
        query?: Partial<remove_quiz_migration_alertSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<remove_quiz_migration_alertSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: remove_quiz_migration_alertSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: remove_quiz_migration_alertSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Remove quiz migration alert
 *
 * Remove alert about the limitations of quiz migrations that is displayed to a
 * user in a course
 *
 * You must be logged in to use this endpoint
 *
 * Nickname: remove_quiz_migration_alert
 */
export async function remove_quiz_migration_alert(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{id}/dismiss_migration_limitation_message`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
