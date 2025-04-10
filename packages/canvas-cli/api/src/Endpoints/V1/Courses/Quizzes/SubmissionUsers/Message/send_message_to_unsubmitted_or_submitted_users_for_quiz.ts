import { client } from '../../../../../../Client.js';
import { QuizUserConversation } from '../../../../../../Overrides.js';

export type send_message_to_unsubmitted_or_submitted_users_for_quizPathParameters =
  {
    /** ID */
    course_id: string;
    /** ID */
    id: string;
  };

export type send_message_to_unsubmitted_or_submitted_users_for_quizFormParameters =
  {
    /** - Body and recipients to send the message to. */
    conversations: QuizUserConversation;
  };

type Options = {
  pathParams: send_message_to_unsubmitted_or_submitted_users_for_quizPathParameters;
} & (
  | {
      params?: Partial<send_message_to_unsubmitted_or_submitted_users_for_quizFormParameters>;
      strict?: false;
    }
  | {
      params: send_message_to_unsubmitted_or_submitted_users_for_quizFormParameters;
      strict: true;
    }
);

/**
 * Send a message to unsubmitted or submitted users for the quiz
 *
 * { "body": { "type": "string", "description": "message body of the
 * conversation to be created", "example": "Please take the quiz." },
 * "recipients": { "type": "string", "description": "Who to send the message to.
 * May be either 'submitted' or 'unsubmitted'", "example": "submitted" },
 * "subject": { "type": "string", "description": "Subject of the new
 * Conversation created", "example": "ATTN: Quiz 101 Students" } }
 *
 * Nickname: send_message_to_unsubmitted_or_submitted_users_for_quiz
 */
export async function send_message_to_unsubmitted_or_submitted_users_for_quiz({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{id}/submission_users/message`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
