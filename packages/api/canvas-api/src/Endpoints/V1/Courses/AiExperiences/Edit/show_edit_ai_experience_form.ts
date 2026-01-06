import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type show_edit_ai_experience_formPathParameters = {
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

export type show_edit_ai_experience_formSearchParameters = Masquerade;

type Options = {
  pathParams: show_edit_ai_experience_formPathParameters;
} & (
  | {
      searchParams?: Partial<show_edit_ai_experience_formSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_edit_ai_experience_formSearchParameters;
      strict: true;
    }
);

/**
 * Show edit AI experience form
 *
 * Display the form for editing an existing AI experience
 *
 * Nickname: show_edit_ai_experience_form
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
