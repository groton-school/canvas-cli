import { SerializedHash } from '';

type Parameters = {
  /** The summary of the problem */
  'error[subject]': string;
  /** URL from which the report was issued */
  'error[url]': string;
  /** Email address for the reporting user */
  'error[email]': string;
  /** The long version of the story from the user one what they experienced */
  'error[comments]': string;
  /**
   * A collection of metadata about the users' environment. If not provided,
   * canvas will collect it based on information found in the request.
   * (Doesn't have to be HTTPENV info, could be anything JSON object that can
   * be serialized as a hash, a mobile app might include relevant metadata for
   * itself)
   */
  'error[http_env]': SerializedHash;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create Error Report
 *
 * Create a new error report documenting an experienced problem
 *
 * Performs the same action as when a user uses the "help -> report a problem"
 * dialog.
 *
 * Nickname: create_error_report
 */
export async function create({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/error_reports`, { method: 'POST', body: parameters })
  ).json();
}
