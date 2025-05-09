import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Module } from '../../../../Resources/CoursePace.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = Partial<{
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
  /**
   * The partial name of the modules (and module items, if 'items' is
   * specified with include[]) to match and return.
   */
  search_term: string;
  /** Returns module completion information for the student with this id. */
  student_id: string;
}> &
  Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List modules
 *
 * A paginated list of the modules in a course
 *
 * Nickname: list_modules
 */
export async function list(options: Options) {
  return await client().fetchAs<Module[]>(
    `/api/v1/courses/{course_id}/modules`,
    {
      method: 'GET',
      ...options
    }
  );
}
