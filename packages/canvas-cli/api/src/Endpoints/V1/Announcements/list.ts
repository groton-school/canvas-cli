import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { array } from '../../../Overrides.js';
import { DiscussionTopic } from '../../../Resources/DiscussionTopics.js';

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * List of context_codes to retrieve announcements for (for example,
     * +course_123+). Only courses are presently supported. The call will fail
     * unless the caller has View Announcements permission in all listed
     * courses.
     */
    context_codes: string[];
    /**
     * Only return announcements posted since the start_date (inclusive).
     * Defaults to 14 days ago. The value should be formatted as: yyyy-mm-dd or
     * ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
     *
     * Format: date
     */
    start_date: string;
    /**
     * Only return announcements posted before the end_date (inclusive).
     * Defaults to 28 days from start_date. The value should be formatted as:
     * yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ. Announcements scheduled for
     * future posting will only be returned to course administrators.
     *
     * Format: date
     */
    end_date: string;
    /**
     * Only return announcements having locked_at nil or after available_after
     * (exclusive). The value should be formatted as: yyyy-mm-dd or ISO 8601
     * YYYY-MM-DDTHH:MM:SSZ. Effective only for students (who don't have
     * moderate forum right).
     *
     * Format: date
     */
    available_after: string;
    /**
     * Only return active announcements that have been published. Applies only
     * to requesting users that have permission to view unpublished items.
     * Defaults to false for users with access to view unpublished items,
     * otherwise true and unmodifiable.
     */
    active_only: boolean;
    /**
     * Only return the latest announcement for each associated context. The
     * response will include at most one announcement for each specified context
     * in the context_codes[] parameter. Defaults to false.
     */
    latest_only: boolean;
    /**
     * Optional list of resources to include with the response. May include a
     * string of the name of the resource. Possible values are: "sections",
     * "sections_user_count" if "sections" is passed, includes the course
     * sections that are associated with the topic, if the topic is specific to
     * certain sections of the course. If "sections_user_count" is passed, then:
     * (a) If sections were asked for _and_ the topic is specific to certain
     * course sections sections, includes the number of users in each section.
     * (as part of the section json asked for above) (b) Else, includes at the
     * root level the total number of users in the topic's context (group or
     * course) that the topic applies to.
     */
    include: array;
  }>;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List announcements
 *
 * Returns the paginated list of announcements for the given courses and date
 * range. Note that a +context_code+ field is added to the responses so you can
 * tell which course each announcement belongs to.
 *
 * Nickname: list_announcements
 */
export async function list(options: Options) {
  const response = await client().fetchAs<DiscussionTopic[]>(
    `/api/v1/announcements`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
