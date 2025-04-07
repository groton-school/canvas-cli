type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List enabled features
 *
 * A paginated list of all features that are enabled on a given Account, Course,
 * or User. Only the feature names are returned.
 *
 * Nickname: list_enabled_features_users
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{user_id}/features/enabled`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
