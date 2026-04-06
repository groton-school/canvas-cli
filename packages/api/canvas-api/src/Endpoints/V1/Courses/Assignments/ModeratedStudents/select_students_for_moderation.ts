import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { User } from '../../../../../Resources/Users.js';

export type select_students_for_moderationPathParameters = {
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
  assignment_id: string | number;
};

export type select_students_for_moderationSearchParameters = Masquerade &
  Paginated;

export type select_students_for_moderationFormParameters = Masquerade & {
  /** User ids for students to select for moderation */
  student_ids: number | string[];
};

type Options = (
  | {
      path: select_students_for_moderationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: select_students_for_moderationPathParameters;
    }
) &
  (
    | {
        query?: Partial<select_students_for_moderationSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<select_students_for_moderationSearchParameters>;
        body?: Partial<select_students_for_moderationFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<select_students_for_moderationFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: select_students_for_moderationSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: select_students_for_moderationSearchParameters;
          }
      ) &
        (
          | {
              body: select_students_for_moderationFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: select_students_for_moderationFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Select students for moderation
 *
 * Returns an array of users that were selected for moderation
 *
 * Nickname: select_students_for_moderation
 */
export async function select_students_for_moderation(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
