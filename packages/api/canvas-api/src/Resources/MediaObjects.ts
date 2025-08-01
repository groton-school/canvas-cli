export type MediaTrack = {
  /**
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /**
   * Type: integer
   *
   * Format: 'int64'
   */
  user_id: number | string;
  /**
   * Type: integer
   *
   * Format: 'int64'
   */
  media_object_id: number | string;
  kind: string;
  locale: string;
  content: string;
  created_at: string;
  updated_at: string;
  webvtt_content: string;
};

export type MediaObject = {
  /** Type: boolean */
  can_add_captions: boolean | string;
  user_entered_title: string;
  title: string;
  media_id: string;
  media_type: string;
  media_tracks: string;
  media_sources: string;
};
