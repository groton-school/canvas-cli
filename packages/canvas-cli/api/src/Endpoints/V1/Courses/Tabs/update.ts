import { client } from '../../../../Client.js';
import { Tab } from '../../../../Resources/Tabs.js';

type Parameters = {
  /**
   * The new position of the tab, 1-based
   *
   * Format: 'int64'
   */
  position: number;
  /** No description */
  hidden: boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a tab for a course
 *
 * Home and Settings tabs are not manageable, and can't be hidden or moved
 *
 * Returns a tab object
 *
 * Nickname: update_tab_for_course
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<Tab>(`/v1/courses/{course_id}/tabs/{tab_id}`, {
    method: 'PUT',
    params: parameters
  });
}
