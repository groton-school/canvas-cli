import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  topic_id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get the full topic
 *
 * Return a cached structure of the discussion topic, containing all entries,
 * their authors, and their message bodies.
 *
 * May require (depending on the topic) that the user has posted in the topic.
 * If it is required, and the user has not posted, will respond with a 403
 * Forbidden status and the body 'require_initial_post'.
 *
 * In some rare situations, this cached structure may not be available yet. In
 * that case, the server will respond with a 503 error, and the caller should
 * try again soon.
 *
 * The response is an object containing the following keys: "participants": A
 * list of summary information on users who have posted to the discussion. Each
 * value is an object containing their id, display_name, and avatar_url.
 * "unread_entries": A list of entry ids that are unread by the current user.
 * this implies that any entry not in this list is read. "entry_ratings": A map
 * of entry ids to ratings by the current user. Entries not in this list have no
 * rating. Only populated if rating is enabled. "forced_entries": A list of
 * entry ids that have forced_read_state set to true. This flag is meant to
 * indicate the entry's read_state has been manually set to 'unread' by the
 * user, so the entry should not be automatically marked as read. "view": A
 * threaded view of all the entries in the discussion, containing the id,
 * user_id, and message. "new_entries": Because this view is eventually
 * consistent, it's possible that newly created or updated entries won't yet be
 * reflected in the view. If the application wants to also get a flat list of
 * all entries not yet reflected in the view, pass include_new_entries=1 to the
 * request and this array of entries will be returned. These entries are
 * returned in a flat array, in ascending created_at order.
 *
 * Nickname: get_full_topic_groups
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/view`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
