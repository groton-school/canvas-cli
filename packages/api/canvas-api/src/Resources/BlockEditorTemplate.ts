import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type BlockEditorTemplate = {
  /**
   * the ID of the page
   *
   * type: integer
   */
  id: number | string;
  /**
   * name of the template
   *
   *
   */
  name: string;
  /**
   * description of the template
   *
   *
   */
  description: string;
  /**
   * the creation date for the template
   *
   * format: date-time
   */
  created_at: string;
  /**
   * the date the template was last updated
   *
   * format: date-time
   */
  updated_at: string;
  /**
   * The JSON data that is the template
   *
   *
   */
  node_tree: string;
  /**
   * The version of the editor that created the template
   *
   *
   */
  editor_version: string;
  /**
   * The type of template. One of 'block', 'section', or 'page'
   *
   *
   */
  template_type: string;
  /**
   * String indicating what state this assignment is in.
   *
   *
   */
  workflow_state: string;
};
