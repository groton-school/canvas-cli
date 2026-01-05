import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type split_merged_users_into_separate_usersPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type split_merged_users_into_separate_usersSearchParameters =
  Masquerade & Paginated;

type Options = {
  pathParams: split_merged_users_into_separate_usersPathParameters;
} & (
  | {
      searchParams?: Partial<split_merged_users_into_separate_usersSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: split_merged_users_into_separate_usersSearchParameters;
      strict: true;
    }
);

/**
 * Split merged users into separate users
 *
 * Merged users cannot be fully restored to their previous state, but this will
 * attempt to split as much as possible to the previous state. To split a merged
 * user, the caller must have permissions to manage all of the users logins. If
 * there are multiple users that have been merged into one user it will split
 * each merge into a separate user. A split can only happen within 180 days of a
 * user merge. A user merge deletes the previous user and may be permanently
 * deleted. In this scenario we create a new user object and proceed to move as
 * much as possible to the new user. The user object will not have preserved the
 * name or settings from the previous user. Some items may have been deleted
 * during a user_merge that cannot be restored, and/or the data has become stale
 * because of other changes to the objects since the time of the user_merge.
 *
 * Split users details and caveats:
 *
 * The from_user is the user that was deleted in the user_merge process. The
 * destination_user is the user that remains, that is being split.
 *
 * Avatars: When both users had avatars, both will be remain. When from_user had
 * an avatar and destination_user did not have an avatar, the destination_user's
 * avatar will be deleted if it still matches what was there are the time of the
 * merge. If the destination_user's avatar was changed at anytime after the
 * merge, it will remain on the destination user. If the from_user had an avatar
 * it will be there after split.
 *
 * Terms of Use: If from_user had not accepted terms of use, they will be
 * prompted again to accept terms of use after the split. If the
 * destination_user had not accepted terms of use, hey will be prompted again to
 * accept terms of use after the split. If neither user had accepted the terms
 * of use, but since the time of the merge had accepted, both will be prompted
 * to accept terms of use. If both had accepted terms of use, this will remain.
 *
 * Communication Channels: All communication channels are restored to what they
 * were prior to the merge. If a communication channel was added after the
 * merge, it will remain on the destination_user. Notification preferences
 * remain with the communication channels.
 *
 * Enrollments: All enrollments from the time of the merge will be moved back to
 * where they were. Enrollments created since the time of the merge that were
 * created by sis_import will go to the user that owns that sis_id used for the
 * import. Other new enrollments will remain on the destination_user. Everything
 * that is tied to the destination_user at the course level relating to an
 * enrollment is moved to the from_user. When both users are in the same course
 * prior to merge this can cause some unexpected items to move.
 *
 * Submissions: Unlike other items tied to a course, submissions are explicitly
 * recorded to avoid problems with grades. All submissions were moved are
 * restored to the spot prior to merge. All submission that were created in a
 * course that was moved in enrollments are moved over to the from_user.
 *
 * Other notes: Access Tokens are moved back on split. Conversations are moved
 * back on split. Favorites that existing at the time of merge are moved back on
 * split. LTI ids are restored to how they were prior to merge.
 *
 * Nickname: split_merged_users_into_separate_users
 */
export async function split_merged_users_into_separate_users(options: Options) {
  const response = await client().fetchAs<User[]>(`/api/v1/users/{id}/split`, {
    method: 'POST',
    ...options
  });
  return response;
}
