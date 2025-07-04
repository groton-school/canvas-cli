export type PeerReview = {
  /**
   * The assessors user id
   *
   * Type: integer
   */
  assessor_id: number | string;
  /**
   * The id for the asset associated with this Peer Review
   *
   * Type: integer
   */
  asset_id: number | string;
  /** The type of the asset */
  asset_type: string;
  /**
   * The id of the Peer Review
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The user id for the owner of the asset
   *
   * Type: integer
   */
  user_id: number | string;
  /** The state of the Peer Review, either 'assigned' or 'completed' */
  workflow_state: string;
  /**
   * The User object for the owner of the asset if the user include parameter is
   * provided (see user API) (optional)
   */
  user: string;
  /**
   * The User object for the assessor if the user include parameter is provided
   * (see user API) (optional)
   */
  assessor: string;
  /**
   * The submission comments associated with this Peer Review if the
   * submission_comment include parameter is provided (see submissions API)
   * (optional)
   */
  submission_comments: string;
};
