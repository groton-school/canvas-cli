import { User } from '../../../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Merge user into another user
 *
 * Merge a user into another user. To merge users, the caller must have
 * permissions to manage both users. This should be considered irreversible.
 * This will delete the user and move all the data into the destination user.
 *
 * User merge details and caveats: The from_user is the user that was deleted in
 * the user_merge process. The destination_user is the user that remains, that
 * is being split.
 *
 * Avatars: When both users have avatars, only the destination_users avatar will
 * remain. When one user has an avatar, it will end up on the destination_user.
 *
 * Terms of Use: If either user has accepted terms of use, it will be be left as
 * accepted.
 *
 * Communication Channels: All unique communication channels moved to the
 * destination_user. All notification preferences are moved to the
 * destination_user.
 *
 * Enrollments: All unique enrollments are moved to the destination_user. When
 * there is an enrollment that would end up making it so that a user would be
 * observing themselves, the enrollment is not moved over. Everything that is
 * tied to the from_user at the course level relating to the enrollment is also
 * moved to the destination_user.
 *
 * Submissions: All submissions are moved to the destination_user. If there are
 * enrollments for both users in the same course, we prefer submissions that
 * have grades then submissions that have work in them, and if there are no
 * grades or no work, they are not moved.
 *
 * Other notes: Access Tokens are moved on merge. Conversations are moved on
 * merge. Favorites are moved on merge. Courses will commonly use LTI tools. LTI
 * tools reference the user with IDs that are stored on a user object. Merging
 * users deletes one user and moves all records from the deleted user to the
 * destination_user. These IDs are kept for all enrollments, group_membership,
 * and account_users for the from_user at the time of the merge. When the
 * destination_user launches an LTI tool from a course that used to be the
 * from_user's, it doesn't appear as a new user to the tool provider. Instead it
 * will send the stored ids. The destination_user's LTI IDs remain as they were
 * for the courses that they originally had. Future enrollments for the
 * destination_user will use the IDs that are on the destination_user object.
 * LTI IDs that are kept and tracked per context include lti_context_id, lti_id
 * and uuid. APIs that return the LTI ids will return the one for the context
 * that it is called for, except for the user uuid. The user UUID will display
 * the destination_users uuid, and when getting the uuid from an api that is in
 * a context that was recorded from a merge event, an additional attribute is
 * added as past_uuid.
 *
 * When finding users by SIS ids in different accounts the
 * destination_account_id is required.
 *
 * The account can also be identified by passing the domain in
 * destination_account_id.
 *
 * Nickname: merge_user_into_another_user_accounts
 */
export async function merge_user_into_another_user_accounts({
  parameters
}: Options): Promise<User> {
  return await (
    await fetch(
      `/v1/users/{id}/merge_into/accounts/{destination_account_id}/users/{destination_user_id}`,
      { method: 'PUT', body: parameters }
    )
  ).json();
}
