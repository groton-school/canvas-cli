import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { GroupCategoryandgroupsoperationresults } from '../../../../../Overrides.js';

export type bulk_manage_differentiation_tagsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type bulk_manage_differentiation_tagsSearchParameters = Masquerade;

export type bulk_manage_differentiation_tagsFormParameters = Masquerade & {
  /**
   * A hash containing arrays of create/update/delete operations: { "create":
   * [ { "name": "New Group A" }, { "name": "New Group B" } ], "update": [ {
   * "id": 123, "name": "Updated Group Name A" }, { "id": 456, "name":
   * "Updated Group Name B" } ], "delete": [ { "id": 789 }, { "id": 101 } ] }
   *
   * Hash
   */
  operations: JSONObject;
  /**
   * Attributes for the GroupCategory. May include:
   *
   * - Id [Optional, Integer]: The ID of an existing GroupCategory.
   * - Name [Optional, String]: A new name for the GroupCategory. If provided
   *   with an ID, the category name will be updated.
   *
   * Hash
   */
  group_category: JSONObject;
};

type Options = {
  pathParams: bulk_manage_differentiation_tagsPathParameters;
} & (
  | {
      searchParams?: Partial<bulk_manage_differentiation_tagsSearchParameters>;
      params?: Partial<bulk_manage_differentiation_tagsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: bulk_manage_differentiation_tagsSearchParameters;
      params: bulk_manage_differentiation_tagsFormParameters;
      strict: true;
    }
);

/**
 * Bulk manage differentiation tags
 *
 * This API is only meant for Groups and GroupCategories where non_collaborative
 * is true.
 *
 * Perform bulk operations on groups within a group category, or create a new
 * group category along with the groups in one transaction. If creation of the
 * GroupCategory or any Group fails, the entire operation will be rolled back.
 *
 * Nickname: bulk_manage_differentiation_tags
 */
export async function bulk_manage_differentiation_tags(options: Options) {
  const response =
    await client().fetchAs<GroupCategoryandgroupsoperationresults>(
      `/api/v1/courses/{course_id}/group_categories/bulk_manage_differentiation_tag`,
      {
        method: 'POST',
        ...options
      }
    );
  return response;
}
