import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type ConferenceRecording = {
  /**
   *
   *
   * type: integer
   */
  duration_minutes: number | string;
  /**
   *
   *
   *
   */
  title: string;
  /**
   *
   *
   * format: date-time
   */
  updated_at: string;
  /**
   *
   *
   * format: date-time
   */
  created_at: string;
  /**
   *
   *
   *
   */
  playback_url: string;
};

/**
 *
 */
export type Conference = {
  /**
   * The id of the conference
   *
   * type: integer
   */
  id: number | string;
  /**
   * The type of conference
   *
   *
   */
  conference_type: string;
  /**
   * The 3rd party's ID for the conference
   *
   *
   */
  conference_key: string;
  /**
   * The description for the conference
   *
   *
   */
  description: string;
  /**
   * The expected duration the conference is supposed to last
   *
   * type: integer
   */
  duration: number | string;
  /**
   * The date that the conference ended at, null if it hasn't ended
   *
   * format: date-time
   */
  ended_at: string;
  /**
   * The date the conference started at, null if it hasn't started
   *
   * format: date-time
   */
  started_at: string;
  /**
   * The title of the conference
   *
   *
   */
  title: string;
  /**
   * Array of user ids that are participants in the conference
   *
   *
   */
  users: number | string[];
  /**
   * Array of user ids that are invitees in the conference
   *
   *
   */
  invitees: number | string[];
  /**
   * Array of user ids that are attendees in the conference
   *
   *
   */
  attendees: number | string[];
  /**
   * True if the conference type has advanced settings.
   *
   * type: boolean
   */
  has_advanced_settings: boolean | string;
  /**
   * If true the conference is long running and has no expected end time
   *
   * type: boolean
   */
  long_running: boolean | string;
  /**
   * A collection of settings specific to the conference type
   *
   * object
   */
  user_settings: JSONObject;
  /**
   * A List of recordings for the conference
   *
   *
   */
  recordings: ConferenceRecording[];
  /**
   * URL for the conference, may be null if the conference type doesn't set it
   *
   *
   */
  url: string;
  /**
   * URL to join the conference, may be null if the conference type doesn't set it
   *
   *
   */
  join_url: string;
  /**
   * The type of this conference's context, typically 'Course' or 'Group'.
   *
   *
   */
  context_type: string;
  /**
   * The ID of this conference's context.
   *
   * type: integer
   */
  context_id: number | string;
};
