import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type find_or_create_summary_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  topic_id: string | number;
};

export type find_or_create_summary_coursesSearchParameters = Masquerade;

export type find_or_create_summary_coursesFormParameters = Masquerade & {
  /** Areas or topics for the summary to focus on. */
  userInput: string;
};

type Options = (
  | {
      path: find_or_create_summary_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: find_or_create_summary_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<find_or_create_summary_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<find_or_create_summary_coursesSearchParameters>;
        body?: Partial<find_or_create_summary_coursesFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<find_or_create_summary_coursesFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: find_or_create_summary_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: find_or_create_summary_coursesSearchParameters;
          }
      ) &
        (
          | {
              body: find_or_create_summary_coursesFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: find_or_create_summary_coursesFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Find or Create Summary
 *
 * Generates a summary for a discussion topic. Returns the summary text and
 * usage information.
 *
 * Nickname: find_or_create_summary_courses
 */
export async function find_or_create_summary_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
