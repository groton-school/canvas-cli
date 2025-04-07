type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get custom color
 *
 * Returns the custom colors that have been saved for a user for a given
 * context.
 *
 * The asset_string parameter should be in the format 'context_id', for example
 * 'course_42'.
 *
 * Nickname: get_custom_color
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{id}/colors/{asset_string}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
