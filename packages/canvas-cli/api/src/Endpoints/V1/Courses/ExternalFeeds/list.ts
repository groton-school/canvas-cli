import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List external feeds
 *
 * Returns the paginated list of External Feeds this course or group.
 *
 * Nickname: list_external_feeds_courses
 */
export async function list(options: Options) {
  const response = await client().fetchAs<ExternalFeed[]>(
    `/api/v1/courses/{course_id}/external_feeds`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
