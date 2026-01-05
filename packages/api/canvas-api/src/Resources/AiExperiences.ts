import { JSONValue } from '@battis/typescript-tricks';

/** An AI Experience for interactive learning */
export type AiExperience = {
  /**
   * The ID of the AI experience
   *
   * Type: integer
   */
  id: number | string;
  /** The title for the AI experience */
  title: string;
  /** The description of the AI experience */
  description: string;
  /** The AI facts for the experience (optional) */
  facts: string;
  /** The learning objectives for this experience */
  learning_objective: string;
  /** The pedagogical guidance for the experience */
  pedagogical_guidance: string;
  /** The current published state of the AI experience */
  workflow_state: string;
  /**
   * The course this experience belongs to
   *
   * Type: integer
   */
  course_id: number | string;
};
