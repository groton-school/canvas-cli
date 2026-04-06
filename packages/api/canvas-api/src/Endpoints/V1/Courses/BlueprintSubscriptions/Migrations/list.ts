import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

export type listPathParameters = {
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
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List blueprint imports
 *
 * Shows a paginated list of migrations imported into a course associated with a
 * blueprint, starting with the most recent. See also
 * {api:MasterCourses::MasterTemplatesController#migrations_index the blueprint
 * course side}.
 *
 * Use 'default' as the subscription_id to use the currently active blueprint
 * subscription.
 *
 * Nickname: list_blueprint_imports
 */
export async function list(options: Options) {
  const response = await client().fetchAs<BlueprintMigration[]>(
    `/api/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
