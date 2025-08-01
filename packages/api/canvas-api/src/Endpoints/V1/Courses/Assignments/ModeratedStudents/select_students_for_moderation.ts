import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
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

type Options = {
  pathParams: select_students_for_moderationPathParameters;
} & (
  | {
      searchParams?: Partial<select_students_for_moderationSearchParameters>;
      params?: Partial<select_students_for_moderationFormParameters>;
      strict?: false;
    }
  | {
      searchParams: select_students_for_moderationSearchParameters;
      params: select_students_for_moderationFormParameters;
      strict: true;
    }
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
