import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type find_recipients_searchSearchParameters = Masquerade &
  Partial<{
    /**
     * Search terms used for matching users/courses/groups (e.g. "bob smith").
     * If multiple terms are given (separated via whitespace), only results
     * matching all terms will be returned.
     */
    search: string;
    /**
     * Limit the search to a particular course/group (e.g. "course_3" or
     * "group_4").
     */
    context: string;
    /**
     * Array of ids to exclude from the search. These may be user ids or
     * course/group ids prefixed with "course_" or "group_" respectively, e.g.
     * exclude[]=1&exclude[]=2&exclude[]=course_3
     */
    exclude: string[];
    /** Limit the search just to users or contexts (groups/courses). */
    type: string;
    /**
     * Search for a specific user id. This ignores the other above parameters,
     * and will never return more than one result.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    user_id: number | string;
    /**
     * When searching by user_id, only users that could be normally messaged by
     * this user will be returned. This parameter allows you to specify a
     * conversation that will be referenced for a shared context -- if both the
     * current user and the searched user are in the conversation, the user will
     * be returned. This is used to start new side conversations.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    from_conversation_id: number | string;
    /**
     * Array of permission strings to be checked for each matched context (e.g.
     * "send_messages"). This argument determines which permissions may be
     * returned in the response; it won't prevent contexts from being returned
     * if they don't grant the permission(s).
     */
    permissions: string[];
  }>;

type Options =
  | {
      searchParams?: Partial<find_recipients_searchSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: find_recipients_searchSearchParameters;
      strict: true;
    };

/**
 * Find recipients
 *
 * Find valid recipients (users, courses and groups) that the current user can
 * send messages to. The /api/v1/search/recipients path is the preferred
 * endpoint, /api/v1/conversations/find_recipients is deprecated.
 *
 * Pagination is supported.
 *
 * Nickname: find_recipients_search
 */
export async function find_recipients_search(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/search/recipients`, {
    method: 'GET',
    ...options
  });
  return response;
}
