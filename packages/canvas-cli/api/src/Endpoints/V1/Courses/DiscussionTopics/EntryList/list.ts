import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

export type listSearchParameters = Partial<{
  /**
   * A list of entry ids to retrieve. Entries will be returned in id order,
   * smallest id first.
   */
  ids: string[];
}>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List entries
 *
 * Retrieve a paginated list of discussion entries, given a list of ids.
 *
 * May require (depending on the topic) that the user has posted in the topic.
 * If it is required, and the user has not posted, will respond with a 403
 * Forbidden status and the body 'require_initial_post'.
 *
 * Nickname: list_entries_courses
 */
export async function list(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/entry_list`,
    {
      method: 'GET',
      ...options
    }
  );
}
