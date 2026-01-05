import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type show_new_ai_experience_formPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type show_new_ai_experience_formSearchParameters = Masquerade;

type Options = {
  pathParams: show_new_ai_experience_formPathParameters;
} & (
  | {
      searchParams?: Partial<show_new_ai_experience_formSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_new_ai_experience_formSearchParameters;
      strict: true;
    }
);

/**
 * Show new AI experience form
 *
 * Display the form for creating a new AI experience
 *
 * Nickname: show_new_ai_experience_form
 */
export async function show_new_ai_experience_form(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/ai_experiences/new`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
