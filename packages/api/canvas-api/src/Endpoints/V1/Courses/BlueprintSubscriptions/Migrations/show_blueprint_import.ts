import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

export type show_blueprint_importPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  subscription_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type show_blueprint_importSearchParameters = Masquerade;

type Options = (
  | {
      path: show_blueprint_importPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_blueprint_importPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_blueprint_importSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_blueprint_importSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_blueprint_importSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: show_blueprint_importSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show a blueprint import
 *
 * Shows the status of an import into a course associated with a blueprint. See
 * also {api:MasterCourses::MasterTemplatesController#migrations_show the
 * blueprint course side}.
 *
 * Nickname: show_blueprint_import
 */
export async function show_blueprint_import(options: Options) {
  const response = await client().fetchAs<BlueprintMigration>(
    `/api/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
