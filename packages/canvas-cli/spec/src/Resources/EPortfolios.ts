export type ePortfolio = {
  /**
   * The database ID of the ePortfolio
   *
   * Type: integer
   */
  id: number;
  /**
   * The user ID to which the ePortfolio belongs
   *
   * Type: integer
   */
  user_id: number;
  /** The name of the ePortfolio */
  name: string;
  /** Whether or not the ePortfolio is visible without authentication */
  public: boolean;
  /**
   * The creation timestamp for the ePortfolio
   *
   * Format: 'date-time'
   */
  created_at: string;
  /**
   * The timestamp of the last time any of the ePortfolio attributes changed
   *
   * Format: 'date-time'
   */
  updated_at: string;
  /** The state of the ePortfolio. Either 'active' or 'deleted' */
  workflow_state: string;
  /**
   * The timestamp when the ePortfolio was deleted, or else null
   *
   * Format: 'date-time'
   */
  deleted_at: string;
  /**
   * A flag indicating whether the ePortfolio has been flagged or moderated as
   * spam. One of 'flagged_as_possible_spam', 'marked_as_safe',
   * 'marked_as_spam', or null
   */
  spam_status: string;
};

export type ePortfolioPage = {
  /**
   * The database ID of the ePortfolio
   *
   * Type: integer
   */
  id: number;
  /**
   * The ePortfolio ID to which the entry belongs
   *
   * Type: integer
   */
  eportfolio_id: number;
  /**
   * The positional order of the entry in the list
   *
   * Type: integer
   */
  position: number;
  /** The name of the ePortfolio */
  name: string;
  /** The user entered content of the entry */
  content: string;
  /**
   * The creation timestamp for the ePortfolio
   *
   * Format: 'date-time'
   */
  created_at: string;
  /**
   * The timestamp of the last time any of the ePortfolio attributes changed
   *
   * Format: 'date-time'
   */
  updated_at: string;
};
