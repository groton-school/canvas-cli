type Parameters = {
  /** The html content to process */
  html: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Preview processed html
 *
 * Preview html content processed for this group
 *
 * Nickname: preview_processed_html
 */
export async function preview_processed_html({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/groups/{group_id}/preview_html`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
