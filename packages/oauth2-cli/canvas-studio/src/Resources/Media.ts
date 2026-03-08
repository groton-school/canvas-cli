import {
  DateString,
  DateTimeString,
  URLString
} from '@battis/descriptive-types';
import { User } from './User.js';

export type Media = {
  id: number;
  title: string;
  description: string;
  duration: number;
  created_at: DateTimeString<'ISO'>;
  last_viewed: DateString;
  last_viewed_by_student: DateString;
  thumbnail_url: URLString;
  transcoding_status: string;
  owner: User;
  size: number;
  source: string;
  embed_id: string;
  lti_launch_id: string;
  archived_at: DateTimeString<'ISO'>;
};
