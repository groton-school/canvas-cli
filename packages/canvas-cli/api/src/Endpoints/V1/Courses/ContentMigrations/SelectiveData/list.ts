import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type listSearchParameters = {
  /** The type of content to enumerate. */
  type: string;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: listSearchParameters;
      strict: true;
    }
);

/**
 * List items for selective import
 *
 * Enumerates the content available for selective import in a tree structure.
 * Each node provides a +property+ copy argument that can be supplied to the
 * {api:ContentMigrationsController#update Update endpoint} to selectively copy
 * the content associated with that tree node and its children. Each node may
 * also provide a +sub_items_url+ or an array of +sub_items+ which you can use
 * to obtain copy parameters for a subset of the resources in a given node.
 *
 * If no +type+ is sent you will get a list of the top-level sections in the
 * content. It will look something like this:
 *
 * [{ "type": "course_settings", "property": "copy[all_course_settings]",
 * "title": "Course Settings" }, { "type": "context_modules", "property":
 * "copy[all_context_modules]", "title": "Modules", "count": 5, "sub_items_url":
 * "http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules"
 * }, { "type": "assignments", "property": "copy[all_assignments]", "title":
 * "Assignments", "count": 2, "sub_items_url":
 * "http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments"
 * }]
 *
 * When a +type+ is provided, nodes may be further divided via +sub_items+. For
 * example, using +type=assignments+ results in a node for each assignment group
 * and a sub_item for each assignment, like this:
 *
 * [{ "type": "assignment_groups", "title": "An Assignment Group", "property":
 * "copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]", "sub_items":
 * [{ "type": "assignments", "title": "Assignment 1", "property":
 * "copy[assignments][id_i2102a7fa93b29226774949298626719d]" }, { "type":
 * "assignments", "title": "Assignment 2", "property":
 * "copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]" }] }]
 *
 * To import the items corresponding to a particular tree node, use the
 * +property+ as a parameter to the {api:ContentMigrationsController#update
 * Update endpoint} and assign a value of 1, for example:
 *
 * Copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1
 *
 * You can include multiple copy parameters to selectively import multiple items
 * or groups of items.
 *
 * Nickname: list_items_for_selective_import_courses
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<
    {
      type: string;
      property: string;
      title?: string;
      count?: number;
      sub_items_url?: string;
    }[]
  >(`/v1/courses/{course_id}/content_migrations/{id}/selective_data`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
