import { client } from '../../../../Client.js';
import { Module } from '../../../../Resources/CoursePace.js';

export type show_modulePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type show_moduleSearchParameters = {
  /**
   * - "items": Return module items inline if possible. This parameter suggests
   *   that Canvas return module items directly in the Module object JSON, to
   *   avoid having to make separate API requests for each module when
   *   enumerating modules and items. Canvas is free to omit 'items' for any
   *   particular module if it deems them too numerous to return inline.
   *   Callers must be prepared to use the
   *   {api:ContextModuleItemsApiController#index List Module Items API} if
   *   items are not returned.
   * - "content_details": Requires 'items'. Returns additional details with
   *   module items specific to their associated content items. Includes
   *   standard lock information for each item.
   */
  include: string[];
  /** Returns module completion information for the student with this id. */
  student_id: string;
};

type Options = {
  pathParams: show_modulePathParameters;
} & (
  | {
      searchParams?: Partial<show_moduleSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: show_moduleSearchParameters;
      strict: true;
    }
);

/**
 * Show module
 *
 * Get information about a single module
 *
 * Nickname: show_module
 */
export async function show_module({ pathParams, searchParams }: Options) {
  return await client().fetchAs<Module>(
    `/v1/courses/{course_id}/modules/{id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
