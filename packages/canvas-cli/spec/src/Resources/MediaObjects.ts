export type MediaTrack = {
  /** Format: int64 */
  id: number;
  /** Format: int64 */
  user_id: number;
  /** Format: int64 */
  media_object_id: number;
  kind: string;
  locale: string;
  content: string;
  created_at: string;
  updated_at: string;
  webvtt_content: string;
};

export type MediaObject = {
  can_add_captions: boolean;
  user_entered_title: string;
  title: string;
  media_id: string;
  media_type: string;
  media_tracks: string;
  media_sources: string;
};
