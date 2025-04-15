import { client } from '../../../../Client.js';
import { Tab } from '../../../../Resources/Tabs.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  tab_id: string;
};

export type updateFormParameters = {
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
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a tab for a course
 *
 * Home and Settings tabs are not manageable, and can't be hidden or moved
 *
 * Returns a tab object
 *
 * Nickname: update_tab_for_course
 */
export async function update(options: Options) {
  return await client().fetchAs<Tab>(
    `/api/v1/courses/{course_id}/tabs/{tab_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
}
