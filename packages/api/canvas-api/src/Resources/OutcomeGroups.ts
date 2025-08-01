import { Outcome } from './Outcomes.js';

export type OutcomeGroup = {
  /**
   * The ID of the outcome group
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The URL for fetching/updating the outcome group. should be treated as
   * opaque
   */
  url: string;
  /**
   * An abbreviated OutcomeGroup object representing the parent group of this
   * outcome group, if any. omitted in the abbreviated form.
   */
  parent_outcome_group: OutcomeGroup;
  /**
   * The context owning the outcome group. may be null for global outcome
   * groups. omitted in the abbreviated form.
   *
   * Type: integer
   */
  context_id: number | string;
  context_type: string;
  /** Title of the outcome group */
  title: string;
  /** Description of the outcome group. omitted in the abbreviated form. */
  description: string;
  /** A custom GUID for the learning standard. */
  vendor_guid: string;
  /**
   * The URL for listing/creating subgroups under the outcome group. should be
   * treated as opaque
   */
  subgroups_url: string;
  /**
   * The URL for listing/creating outcome links under the outcome group. should
   * be treated as opaque
   */
  outcomes_url: string;
  /**
   * The URL for importing another group into this outcome group. should be
   * treated as opaque. omitted in the abbreviated form.
   */
  import_url: string;
  /**
   * Whether the current user can update the outcome group
   *
   * Type: boolean
   */
  can_edit: boolean | string;
};

export type OutcomeLink = {
  /** The URL for fetching/updating the outcome link. should be treated as opaque */
  url: string;
  /**
   * The context owning the outcome link. will match the context owning the
   * outcome group containing the outcome link; included for convenience. may be
   * null for links in global outcome groups.
   *
   * Type: integer
   */
  context_id: number | string;
  context_type: string;
  /**
   * An abbreviated OutcomeGroup object representing the group containing the
   * outcome link.
   */
  outcome_group: OutcomeGroup;
  /**
   * An abbreviated Outcome object representing the outcome linked into the
   * containing outcome group.
   */
  outcome: Outcome;
  /**
   * Whether this outcome has been used to assess a student in the context of
   * this outcome link. In other words, this will be set to true if the context
   * is a course, and a student has been assessed with this outcome in that
   * course.
   *
   * Type: boolean
   */
  assessed: boolean | string;
  /**
   * Whether this outcome link is manageable and is not the last link to an
   * aligned outcome
   *
   * Type: boolean
   */
  can_unlink: boolean | string;
};
