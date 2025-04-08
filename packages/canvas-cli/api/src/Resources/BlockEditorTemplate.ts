export type BlockEditorTemplate = {
  /**
   * The ID of the page
   *
   * Type: integer
   */
  id: number;
  /** Name of the template */
  name: string;
  /** Description of the template */
  description: string;
  /**
   * The creation date for the template
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The date the template was last updated
   *
   * Format: date-time
   */
  updated_at: string;
  /** The JSON data that is the template */
  node_tree: string;
  /** The version of the editor that created the template */
  editor_version: string;
  /** The type of template. One of 'block', 'section', or 'page' */
  template_type: string;
  /** String indicating what state this assignment is in. */
  workflow_state: string;
};
