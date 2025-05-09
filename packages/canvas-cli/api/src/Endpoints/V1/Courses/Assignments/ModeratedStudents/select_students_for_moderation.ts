import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { User } from '../../../../../Resources/Users.js';

export type select_students_for_moderationPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

export type select_students_for_moderationSearchParameters = Paginated;

export type select_students_for_moderationFormParameters = {
  /** User ids for students to select for moderation */
  student_ids: number[];
};

type Options = {
  pathParams: select_students_for_moderationPathParameters;
} & (
  | {
      params?: Partial<select_students_for_moderationFormParameters>;
      strict?: false;
    }
  | {
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
  return await client().fetchAs<User[]>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students`,
    {
      method: 'POST',
      ...options
    }
  );
}
