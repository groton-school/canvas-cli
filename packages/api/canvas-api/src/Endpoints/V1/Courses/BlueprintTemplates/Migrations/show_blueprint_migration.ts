import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

export type show_blueprint_migrationPathParameters = {
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
  template_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type show_blueprint_migrationSearchParameters = Masquerade;

type Options = (
  | {
      path: show_blueprint_migrationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_blueprint_migrationPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_blueprint_migrationSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_blueprint_migrationSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_blueprint_migrationSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: show_blueprint_migrationSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show a blueprint migration
 *
 * Shows the status of a migration. This endpoint can be called on a blueprint
 * course. See also {api:MasterCourses::MasterTemplatesController#imports_show
 * the associated course side}.
 *
 * Nickname: show_blueprint_migration
 */
export async function show_blueprint_migration(options: Options) {
  const response = await client().fetchAs<BlueprintMigration>(
    `/api/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
