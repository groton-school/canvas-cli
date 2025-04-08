import { QuizUserConversation } from '';
import { client } from '../../../../../../Client.js';

type Parameters = {
  /** - Body and recipients to send the message to. */
  conversations: QuizUserConversation;
};

type Options = {
  parameters: Parameters;
};

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
  parameters
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{id}/submission_users/message`,
    { method: 'POST', params: parameters }
  );
}
