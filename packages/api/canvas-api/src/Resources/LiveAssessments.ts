import { JSONValue } from '@battis/typescript-tricks';

/** A pass/fail results for a student */
export type Result = {
  /** A unique identifier for this result */
  id: string;
  /**
   * Whether the user passed or not
   *
   * Type: boolean
   */
  passed: boolean | string;
  /**
   * When this result was recorded
   *
   * Format: date-time
   */
  assessed_at: string;
  /** Unique identifiers of objects associated with this result */
  links: ResultLinks;
};

/** Unique identifiers of objects associated with a result */
export type ResultLinks = {
  /** A unique identifier for the user to whom this result applies */
  user: string;
  /** A unique identifier for the user who created this result */
  assessor: string;
  /** A unique identifier for the assessment that this result is for */
  assessment: string;
};

/** A simple assessment that collects pass/fail results for a student */
export type Assessment = {
  /** A unique identifier for this live assessment */
  id: string;
  /** A client specified unique identifier for the assessment */
  key: string;
  /** A human readable title for the assessment */
  title: string;
};
