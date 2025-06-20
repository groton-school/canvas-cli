import { client } from '../../../../Client.js';
import { ModuleItemSequence } from '../../../../Resources/Modules.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

export type getSearchParameters = Partial<{
  /**
   * The type of asset to find module sequence information for. Use the
   * ModuleItem if it is known (e.g., the user navigated from a module item),
   * since this will avoid ambiguity if the asset appears more than once in
   * the module sequence.
   */
  asset_type: string;
  /**
   * The id of the asset (or the url in the case of a Page)
   *
   * Format: 'int64'
   */
  asset_id: number;
}>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get module item sequence
 *
 * Given an asset in a course, find the ModuleItem it belongs to, the previous
 * and next Module Items in the course sequence, and also any applicable mastery
 * path rules
 *
 * Nickname: get_module_item_sequence
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ModuleItemSequence>(
    `/api/v1/courses/{course_id}/module_item_sequence`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
