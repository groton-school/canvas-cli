import { client } from '../../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  template_id: string;
};

export type updateFormParameters = {
  /**
   * Courses to add as associated courses
   *
   * Array
   */
  course_ids_to_add: string[];
  /**
   * Courses to remove as associated courses
   *
   * Array
   */
  course_ids_to_remove: string[];
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update associated courses
 *
 * Send a list of course ids to add or remove new associations for the template.
 * Cannot add courses that do not belong to the blueprint course's account. Also
 * cannot add other blueprint courses or courses that already have an
 * association with another blueprint course.
 *
 * After associating new courses,
 * {api:MasterCourses::MasterTemplatesController#queue_migration start a sync}
 * to populate their contents from the blueprint.
 *
 * Nickname: update_associated_courses
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/blueprint_templates/{template_id}/update_associations`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
