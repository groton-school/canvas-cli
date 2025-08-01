/**
 * A pairing unique to that enrollment period given to a recipient of that
 * temporary enrollment.
 */
export type TemporaryEnrollmentPairing = {
  /**
   * The ID of the temporary enrollment pairing
   *
   * Type: integer
   */
  id: number | string;
  /** The current status of the temporary enrollment pairing */
  workflow_state: string;
};
