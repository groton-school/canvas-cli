import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

type Parameters = {
  /**
   * The ID of the existing outcome to link.
   *
   * Format: int64
   */
  outcome_id: number;
  /**
   * The ID of the old outcome group. Only used if outcome_id is present.
   *
   * Format: int64
   */
  move_from: number;
  /** The title of the new outcome. Required if outcome_id is absent. */
  title: string;
  /**
   * A friendly name shown in reports for outcomes with cryptic titles, such
   * as common core standards names.
   */
  display_name: string;
  /** The description of the new outcome. */
  description: string;
  /** A custom GUID for the learning standard. */
  vendor_guid: string;
  /**
   * The mastery threshold for the embedded rubric criterion.
   *
   * Format: int64
   */
  mastery_points: number;
  /** The description of a rating level for the embedded rubric criterion. */
  'ratings[description]': string[];
  /**
   * The points corresponding to a rating level for the embedded rubric
   * criterion.
   *
   * Format: int64
   */
  'ratings[points]': string[];
  /**
   * The new calculation method. Defaults to "decaying_average" if the
   * Outcomes New Decaying Average Calculation Method FF is ENABLED then
   * Defaults to "weighted_average"
   */
  calculation_method: string;
  /**
   * The new calculation int. Only applies if the calculation_method is
   * "weighted_average", "decaying_average" or "n_mastery". Defaults to 65
   *
   * Format: int64
   */
  calculation_int: number;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create/link an outcome
 *
 * Link an outcome into the outcome group. The outcome to link can either be
 * specified by a PUT to the link URL for a specific outcome (the outcome_id in
 * the PUT URLs) or by supplying the information for a new outcome (title,
 * description, ratings, mastery_points) in a POST to the collection.
 *
 * If linking an existing outcome, the outcome_id must identify an outcome
 * available to this context; i.e. an outcome owned by this group's context, an
 * outcome owned by an associated account, or a global outcome. With outcome_id
 * present, any other parameters (except move_from) are ignored.
 *
 * If defining a new outcome, the outcome is created in the outcome group's
 * context using the provided title, description, ratings, and mastery points;
 * the title is required but all other fields are optional. The new outcome is
 * then linked into the outcome group.
 *
 * If ratings are provided when creating a new outcome, an embedded rubric
 * criterion is included in the new outcome. This criterion's mastery_points
 * default to the maximum points in the highest rating if not specified in the
 * mastery_points parameter. Any ratings lacking a description are given a
 * default of "No description". Any ratings lacking a point value are given a
 * default of 0. If no ratings are provided, the mastery_points parameter is
 * ignored.
 *
 * Nickname: create_link_outcome_global
 */
export async function create({ parameters }: Options): Promise<OutcomeLink> {
  return await (
    await fetch(`/v1/global/outcome_groups/{id}/outcomes`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
