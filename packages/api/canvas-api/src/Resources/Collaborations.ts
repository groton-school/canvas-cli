import { JSONValue } from '@battis/typescript-tricks';

export type Collaboration = {
  /**
   * The unique identifier for the collaboration
   *
   * Type: integer
   */
  id: number | string;
  /** A name for the type of collaboration */
  collaboration_type: string;
  /** The collaboration document identifier for the collaboration provider */
  document_id: string;
  /**
   * The canvas id of the user who created the collaboration
   *
   * Type: integer
   */
  user_id: number | string;
  /**
   * The canvas id of the course or group to which the collaboration belongs
   *
   * Type: integer
   */
  context_id: number | string;
  /** The canvas type of the course or group to which the collaboration belongs */
  context_type: string;
  /** The LTI launch url to view collaboration. */
  url: string;
  /**
   * The timestamp when the collaboration was created
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The timestamp when the collaboration was last modified
   *
   * Format: date-time
   */
  updated_at: string;
  description: string;
  title: string;
  /** Another representation of the collaboration type */
  type: string;
  /** The LTI launch url to edit the collaboration */
  update_url: string;
  /** The name of the user who owns the collaboration */
  user_name: string;
};

export type Collaborator = {
  /**
   * The unique user or group identifier for the collaborator.
   *
   * Type: integer
   */
  id: number | string;
  /** The type of collaborator (e.g. 'user' or 'group'). */
  type: string;
  /** The name of the collaborator. */
  name: string;
};
