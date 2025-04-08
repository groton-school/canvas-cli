import { client } from '../../../Client.js';
import { DiscussionTopic } from '../../../Resources/DiscussionTopics.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/announcements`, {
    method: 'GET',
    params: parameters
  });
}
