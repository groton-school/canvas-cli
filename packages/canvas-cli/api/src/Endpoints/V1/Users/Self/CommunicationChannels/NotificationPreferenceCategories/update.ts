import { client } from '../../../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  communication_channel_id: string;
  /**
   * The name of the category. Must be parameterized (e.g. The category
   * "Course Content" should be "course_content")
   */
  category: string;
};

export type updateFormParameters = {
  /** The desired frequency for each notification in the category */
  'notification_preferences[frequency]': string;
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
 * Update preferences by category
 *
 * Change the preferences for multiple notifications based on the category for a
 * single communication channel
 *
 * Nickname: update_preferences_by_category
 */
export async function update(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/users/self/communication_channels/{communication_channel_id}/notification_preference_categories/{category}`,
    {
      method: 'PUT',
      ...options
    }
  );
}
