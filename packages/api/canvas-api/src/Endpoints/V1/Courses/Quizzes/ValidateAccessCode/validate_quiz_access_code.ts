import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type validate_quiz_access_codePathParameters = {
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
  id: string | number;
};

export type validate_quiz_access_codeSearchParameters = Masquerade;

export type validate_quiz_access_codeFormParameters = Masquerade & {
  /** The access code being validated */
  access_code: string;
};

type Options = (
  | {
      path: validate_quiz_access_codePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: validate_quiz_access_codePathParameters;
    }
) &
  (
    | {
        query?: Partial<validate_quiz_access_codeSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<validate_quiz_access_codeSearchParameters>;
        body?: Partial<validate_quiz_access_codeFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<validate_quiz_access_codeFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<validate_quiz_access_codeSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: validate_quiz_access_codeSearchParameters;
        body?: Partial<validate_quiz_access_codeFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: validate_quiz_access_codeFormParameters;
        strict: true;
      }
  );

/**
 * Validate quiz access code
 *
 * Accepts an access code and returns a boolean indicating whether that access
 * code is correct
 *
 * Nickname: validate_quiz_access_code
 */
export async function validate_quiz_access_code(options: Options) {
  const response = await client().fetchAs<boolean | string>(
    `/api/v1/courses/{course_id}/quizzes/{id}/validate_access_code`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
