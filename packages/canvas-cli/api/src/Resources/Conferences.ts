import { JSONObject } from '@battis/typescript-tricks';

export type ConferenceRecording = {
  /** Type: integer */
  duration_minutes: number | string;
  title: string;
  /** Format: date-time */
  updated_at: string;
  /** Format: date-time */
  created_at: string;
  playback_url: string;
};

export type Conference = {
  /**
   * The id of the conference
   *
   * Type: integer
   */
  id: number | string;
  /** The type of conference */
  conference_type: string;
  /** The 3rd party's ID for the conference */
  conference_key: string;
  /** The description for the conference */
  description: string;
  /**
   * The expected duration the conference is supposed to last
   *
   * Type: integer
   */
  duration: number | string;
  /**
   * The date that the conference ended at, null if it hasn't ended
   *
   * Format: date-time
   */
  ended_at: string;
  /**
   * The date the conference started at, null if it hasn't started
   *
   * Format: date-time
   */
  started_at: string;
  /** The title of the conference */
  title: string;
  /** Array of user ids that are participants in the conference */
  users: number | string[];
  /** Array of user ids that are invitees in the conference */
  invitees: number | string[];
  /** Array of user ids that are attendees in the conference */
  attendees: number | string[];
  /**
   * True if the conference type has advanced settings.
   *
   * Type: boolean
   */
  has_advanced_settings: boolean | string;
  /**
   * If true the conference is long running and has no expected end time
   *
   * Type: boolean
   */
  long_running: boolean | string;
  /**
   * A collection of settings specific to the conference type
   *
   * Object
   */
  user_settings: JSONObject;
  /** A List of recordings for the conference */
  recordings: ConferenceRecording[];
  /** URL for the conference, may be null if the conference type doesn't set it */
  url: string;
  /**
   * URL to join the conference, may be null if the conference type doesn't set
   * it
   */
  join_url: string;
  /** The type of this conference's context, typically 'Course' or 'Group'. */
  context_type: string;
  /**
   * The ID of this conference's context.
   *
   * Type: integer
   */
  context_id: number | string;
};
