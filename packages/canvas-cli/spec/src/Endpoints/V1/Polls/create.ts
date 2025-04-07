type Parameters = {
  /** The title of the poll. */
  'polls[question]': string[];
  /** A brief description or instructions for the poll. */
  'polls[description]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a single poll
 *
 * Create a new poll for the current user
 *
 * Nickname: create_single_poll
 */
export async function create({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls`, { method: 'POST', body: parameters })
  ).json();
}
