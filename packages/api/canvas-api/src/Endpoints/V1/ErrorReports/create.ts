import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { SerializedHash } from '../../../Overrides.js';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
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

type Options =
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
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
export async function create(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/error_reports`, {
    method: 'POST',
    ...options
  });
  return response;
}
