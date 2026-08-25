import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { SerializedHash } from '../../../Overrides.js';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The summary of the problem
   *
   *
   *
   *
   */
  'error[subject]': string;
  /**
   * URL from which the report was issued
   *
   *
   *
   *
   */
  'error[url]': string;
  /**
   * Email address for the reporting user
   *
   *
   *
   *
   */
  'error[email]': string;
  /**
   * The long version of the story from the user one what they experienced
   *
   *
   *
   *
   */
  'error[comments]': string;
  /**
     * A collection of metadata about the users&#x27; environment.  If not provided,
canvas will collect it based on information found in the request.
(Doesn&#x27;t have to be HTTPENV info, could be anything JSON object that can be
serialized as a hash, a mobile app might include relevant metadata for
itself)
     *
     * 
     *
     * 
     */
  'error[http_env]': SerializedHash;
};

type Options =
  | {
      query?: Partial<createSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<createSearchParameters>;
      body?: Partial<createFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | ((
      | {
          query: createSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: createSearchParameters;
        }
    ) &
      (
        | {
            body: createFormParameters;
          }
        | {
            /** @deprecated Use {@link Options.body} */
            params: createFormParameters;
          }
      ) & {
        strict: true;
      });

/**
 * Create Error Report
 *
 * Create a new error report documenting an experienced problem

Performs the same action as when a user uses the "help -> report a problem"
dialog.
 *
 * nickname: create_error_report
 *
 * 
 *
 * 
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(`/api/v1/error_reports`, {
    method: 'POST',
    ...options
  });
  return response;
}
