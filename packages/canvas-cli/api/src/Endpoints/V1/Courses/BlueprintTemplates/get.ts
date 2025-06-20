import { client } from '../../../../Client.js';
import { BlueprintTemplate } from '../../../../Resources/BlueprintCourses.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  template_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get blueprint information
 *
 * Using 'default' as the template_id should suffice for the current
 * implmentation (as there should be only one template per course). However,
 * using specific template ids may become necessary in the future
 *
 * Nickname: get_blueprint_information
 */
export async function get(options: Options) {
  const response = await client().fetchAs<BlueprintTemplate>(
    `/api/v1/courses/{course_id}/blueprint_templates/{template_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
