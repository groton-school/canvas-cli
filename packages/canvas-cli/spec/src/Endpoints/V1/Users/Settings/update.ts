type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Update user settings.
 *
 * Update an existing user's settings.
 *
 * Nickname: update_user_settings
 */
export async function update({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{id}/settings`, { method: 'GET', body: parameters })
  ).json();
}
