import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type show_edit_ai_experience_formPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type show_edit_ai_experience_formSearchParameters = Masquerade;

type Options = (
  | {
      path: show_edit_ai_experience_formPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_edit_ai_experience_formPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_edit_ai_experience_formSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<show_edit_ai_experience_formSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_edit_ai_experience_formSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: show_edit_ai_experience_formSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show edit AI experience form
 *
 * Display the form for editing an existing AI experience
 *
 * nickname: show_edit_ai_experience_form
 *
 *
 *
 *
 */
export async function show_edit_ai_experience_form(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/ai_experiences/{id}/edit`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
