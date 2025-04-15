import { client } from '../../../../Client.js';

export type remove_quiz_migration_alertPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: remove_quiz_migration_alertPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
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
  return await client().fetchAs<void>(
    `/api/v1/courses/{id}/dismiss_migration_limitation_message`,
    {
      method: 'POST',
      ...options
    }
  );
}
