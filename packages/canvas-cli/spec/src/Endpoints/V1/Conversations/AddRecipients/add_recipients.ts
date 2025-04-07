type Parameters = {
  /**
   * An array of recipient ids. These may be user ids or course/group ids
   * prefixed with "course_" or "group_" respectively, e.g.
   * recipients[]=1&recipients[]=2&recipients[]=course_3
   */
  recipients: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Add recipients
 *
 * Add recipients to an existing group conversation. Response is similar to the
 * GET/show action, except that only includes the latest message (e.g. "joe was
 * added to the conversation by bob")
 *
 * Nickname: add_recipients
 */
export async function add_recipients({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/conversations/{id}/add_recipients`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
