import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { BlockEditorTemplate } from '../../../../Resources/BlockEditorTemplate.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Sort results by this field.
     *
     *
     *
     *
     */
    sort: string;
    /**
     * The sorting order. Defaults to &#x27;asc&#x27;.
     *
     *
     *
     *
     */
    order: string;
    /**
     * If true, include draft templates. If false or omitted
only published templates will be returned.
     *
     * type: boolean
     *
     * 
     */
    drafts: boolean | string;
    /**
     * What type of templates should be returned.
     *
     *
     *
     *
     */
    type: string[];
    /**
     * no description
     *
     *
     *
     *
     */
    include: string[];
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List block templates
 *
 * A list of the block templates available to the current user.
 *
 * nickname: list_block_templates
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<BlockEditorTemplate[]>(
    `/api/v1/courses/{course_id}/block_editor_templates`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
