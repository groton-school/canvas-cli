import { JSONValue } from '@battis/typescript-tricks';

export type ExperienceSummary = {
  /**
   * The current active experience. One of: 'academic', 'career_learner',
   * 'career_learning_provider'.
   */
  current_app: string;
  /**
   * List of available experiences for the user. Can include: 'academic',
   * 'career_learner', 'career_learning_provider'.
   */
  available_apps: string[];
};
