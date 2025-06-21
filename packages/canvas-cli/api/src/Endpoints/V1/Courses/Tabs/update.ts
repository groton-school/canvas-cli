import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Tab } from '../../../../Resources/Tabs.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  tab_id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
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
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
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
  const response = await client().fetchAs<Tab>(
    `/api/v1/courses/{course_id}/tabs/{tab_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
